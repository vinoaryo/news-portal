import { Link } from '@inertiajs/inertia-react';

function Paginator({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            {prev && <Link href={prev} className="btn btn-outline">«</Link>}
            {!prev && <Link href={prev} className="btn btn-outline" disabled>{prev}</Link>}

            <Link className="btn">{current}</Link>

            {next && <Link href={next} className="btn btn-outline">»</Link>}
            {!next && <Link href={next} className="btn btn-outline" disabled>»</Link>}
        </div>
    );
}

export default Paginator;
