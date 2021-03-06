const isNews = (news) => {
    return news.map((data, i) => {
        const authorName = data.author.split('@')[0]
        
        return <div key={i} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{authorName}</div>
                    </div>
                </div>
            </div>
    });
};

const noNews = () => {
    return (
        <div className="flex justify-center items-center">There is no news right now. Come back later</div>
    )
}

function NewsList({ news }) {
    return !news ? noNews() : isNews(news);
}

export default NewsList;