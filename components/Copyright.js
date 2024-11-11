const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <div className="mt-6 border-t border-opacity-25 border-t-secondary">
            <p className="pt-4">Copyright © {year} Fiducia Tax Solutions LLC. All Rights Reserved. Terms & Conditions Apply.</p>
        </div>
    );
};

export default Copyright;