import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import qs from "qs";
import ReactMarkDown from "react-markdown";

const GetArticleContent = async (slug) => {
    const CustomQuery = qs.stringify({
        filters: {
            Slug: slug,
        },
    });

    const ArticleContent = await fetch(`http://localhost:1337/api/articles?${CustomQuery}`);
    const ArticleData = await ArticleContent.json();
    return ArticleData.data[0];
};

const GetLatestArticles = async () => {
    const CustomQuery = qs.stringify({
        pagination: {
            page: 1,
            pageSize: 5, // Adjust the number of articles as needed
        },
        sort: 'Date:DESC',
    });

    const LatestArticlesResponse = await fetch(`http://localhost:1337/api/articles?${CustomQuery}`);
    const LatestArticlesData = await LatestArticlesResponse.json();
    return LatestArticlesData.data;
};

const ArticleContentPage = async ({ params }) => {
    const ArticleDataContent = await GetArticleContent(params.slug);
    const LatestArticles = await GetLatestArticles();

    const formattedDate = new Date(ArticleDataContent.Date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="mx-6 lg:mx-36 my-16 max-lg:my-9">
            <div>
                <nav className="mb-4 text-sm" aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-3">
                        <li>
                            <Link href="/" className="text-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <span className=""><ChevronRightIcon className="w-4" /></span>
                        </li>
                        <li>
                            <Link href="/articles" className="text-gray-700">
                                Articles
                            </Link>
                        </li>
                        <li>
                            <span className=""><ChevronRightIcon className="w-4" /></span>
                        </li>
                        <li aria-current="page">
                            <span className="font-medium text-gray-500">{ArticleDataContent.Title}</span>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="lg:flex lg:justify-between">
                <div className="my-9">
                    <div className="bg-accent text-secondary p-4 sticky top-9 justify-items-center max-lg:flex max-lg:items-center max-lg:justify-center max-lg:gap-4 max-lg:p-2">
                        <div>
                            <CalendarIcon className="size-16 max-lg:size-12" />
                        </div>
                        <div>
                            <div className="font-small text-md">Published On</div>
                            <div>{formattedDate}</div>
                        </div>
                    </div>
                </div>
                <div className="my-9 lg:w-1/2 max-lg:mb-12 text-pretty">
                    <div className="">
                        <div className="mb-6 font-bold text-2xl">
                            {ArticleDataContent.Title}
                        </div>
                        <div className="mb-6 prose">
                            {ArticleDataContent.Description}
                        </div>
                    </div>
                    <div className="prose text-pretty">
                        <ReactMarkDown>
                            {ArticleDataContent.Article}
                        </ReactMarkDown>
                    </div>
                </div>

                {/* Latest Articles Section */}
                <div className="lg:w-1/4 my-9">
                    <div className="sticky top-9 bg-accent text-background p-9 text-pretty">
                        <h2 className="font-bold text-2xl mb-6">Latest Articles</h2>
                        <div className="">
                            {LatestArticles.map((article) => (
                                <div key={article.Slug} className="mb-9">
                                    <Link href={`/articles/${article.Slug}`}>
                                        <h3 className="font-semibold">{article.Title}</h3>
                                    </Link>
                                    <p className="text-sm font-small">
                                        {new Date(article.Date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ArticleContentPage;


