// SearchInput.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchInput = ({ initialSearch }) => {
    const [searchQuery, setSearchQuery] = useState(initialSearch || '');
    const router = useRouter();

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        const searchParams = new URLSearchParams(window.location.search);
        if (value) {
            searchParams.set('search', value);
        } else {
            searchParams.delete('search');
        }
        router.push(`?${searchParams.toString()}`);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="rounded-full w-full px-10 py-3 border shadow-xl"
            />
        </div>
    );
};

export default SearchInput;
