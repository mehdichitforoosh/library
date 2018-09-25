import React from 'react';

class Pagination extends React.Component {

    static defaultProps = {
        itemsPerPageCount: 10,
        totalItemsCount: 0,
        pageRange: 5,
        currentPage: 1,
        renderOnOnlyOnePage: true
    }

    constructor(props) {
        super(props);
        // this.previousPage = this.previousPage.bind(this);
        // this.nextPage = this.nextPage.bind(this);
    }

    getPageCount() {
        return Math.ceil(this.props.totalItemsCount / this.props.itemsPerPageCount);
    }

    getPageNumbers() {
        let pageNumbers = [];
        let pageCount = this.getPageCount();
        let rightDistance = Math.floor(this.props.pageRange / 2);
        let firstIndex = this.props.currentPage - rightDistance;
        if (pageCount > this.props.pageRange) {
            let lastIndex = firstIndex + this.props.pageRange;
            let index = firstIndex;
            while (index < lastIndex) {
                pageNumbers.push(index);
                index++;
            }
        } else {
            let i = 1;
            while (i <= pageCount) {
                pageNumbers.push(i);
                i++;
            }
        }
        return pageNumbers;
    }

    previousPage() {
        // call callback

    }

    nextPage() {
        //Check next page exist
        const pageCount = this.getPageCount();
        const nextPage = this.props.currentPage + 1;

        if (nextPage <= pageCount) {
            this.props.callback(nextPage);
        }
    }

    render() {
        const nextPage = this.props.currentPage + 1;
        const pageCount = this.getPageCount();
        const pageNumbers = this.getPageNumbers();
        let render = true;
        if (pageCount === 1 && !this.props.renderOnOnlyOnePage) {
            render = false;
        }
        return (
            render && (
                <ul className="uk-pagination uk-flex-center" uk-margin="">
                    <li>
                        <a onClick={() => this.previousPage()}>
                            <span uk-pagination-previous=""></span>
                        </a>
                    </li>
                    {pageNumbers.map((pageNumber, index) => {
                        return (
                            <li key={index} className={pageNumber === this.props.currentPage ? `uk-active` : null}>
                                <a onClick={() => this.props.callback(pageNumber)} >{pageNumber}</a>
                            </li>
                        );
                    })}
                    <li className={(nextPage > pageCount) ? 'uk-disabled' : null}>
                    {/* Check for if-else */}
                        <a onClick={(nextPage <= pageCount) ? () => this.nextPage() : null}>
                            <span uk-pagination-next=""></span>
                        </a>
                    </li>
                </ul>)
        );
    }
}

export default Pagination;