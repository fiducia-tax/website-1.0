import SearchInput from "@/components/SearchInput";
import Link from "next/link";
import qs from 'qs';

// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

async function GetArticlesListings(currentPage, searchQuery) {
    const query = qs.stringify({
        pagination: {
            page: currentPage,
            pageSize: 10,
        },
        sort: 'id:DESC',
        filters: {
            // Search in Title, Description, and Article
            $or: [
                { Title: { $contains: searchQuery || '' } },
                { Description: { $contains: searchQuery || '' } },
                { Article: { $contains: searchQuery || '' } },
            ],
        },
    }, {
        encodeValuesOnly: true,
    });

    const response = await fetch(`http://localhost:1337/api/articles?${query}`);
    const data = await response.json();
    return data;
}

const ArticleListingsPage = async ({ searchParams }) => {
    const currentPage = parseInt(searchParams.page) || 1;
    const searchQuery = searchParams.search || '';
    const articlesData = await GetArticlesListings(currentPage, searchQuery);

    const articles = articlesData.data || [];
    const totalCount = articlesData.meta?.pagination?.total || 0;
    const pageSize = 10;
    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <div className="lg:mx-36 mx-6 my-16">
            {/* Search Input */}
            <div className="mb-8">
                <SearchInput initialSearch={searchQuery} />
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-9 lg:mt-16">
                {articles.map(article => {
                    const formattedDate = new Date(article.Date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    });

                    return (
                        <div key={article.Slug} className="flex max-lg:mb-9">
                            <div className="bg-secondary rounded-xl p-6 flex flex-col justify-between shadow-lg">
                                <div className="font-bold text-xl mb-3">
                                    <Link href={`/articles/${article.Slug}`}>
                                        {article.Title}
                                    </Link>
                                </div>
                                <div className="mb-6">
                                    {truncateText(article.Description, 150)}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="font-semibold">
                                        {formattedDate}
                                    </div>
                                    <div>
                                        <Link href={`/articles/${article.Slug}`}>
                                            <button className="px-3 py-2 rounded-full text-background bg-text">
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-end items-center my-16">
                {currentPage > 1 && (
                    <Link href={`articles/?page=${currentPage - 1}&search=${searchQuery}`} className="mx-2">
                        <button className="px-4 py-2 rounded-full bg-text text-background">
                            Previous
                        </button>
                    </Link>
                )}
                <span className="mx-2">Page {currentPage} of {totalPages}</span>
                {currentPage < totalPages && (
                    <Link href={`articles/?page=${currentPage + 1}&search=${searchQuery}`} className="mx-2">
                        <button className="px-4 py-2 rounded-full bg-text text-background">
                            Next
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ArticleListingsPage;
