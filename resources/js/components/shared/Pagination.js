
const Pagination = ({prev_page_url, next_page_url, loadPrevious, loadNext})=>{
    return(
        <div className="d-flex">
            <button type="button" className="btn btn-primary" onClick={loadPrevious}
                        disabled={!prev_page_url && true}
            >Previous Page</button>

            <button type="button" className="btn btn-primary" onClick={loadNext}
                        disabled={!next_page_url && true}
            >Next Page</button>
    </div>
    )
}


export default Pagination;