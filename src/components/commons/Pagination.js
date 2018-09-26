import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
        const { totalItemsCount, itemsPerPageCount } = this.props;
        return Math.ceil(totalItemsCount / itemsPerPageCount);
    }

    getPageNumbers() {
        const { pageRange, currentPage } = this.props;
        let pageNumbers = [];
        let pageCount = this.getPageCount();
        let rightDistance = Math.floor(pageRange / 2);
        let firstIndex = currentPage - rightDistance;
        if (pageCount > pageRange) {
            let lastIndex = firstIndex + pageRange;
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
        const { currentPage } = this.props;
        const pageCount = this.getPageCount();
        const nextPage = currentPage + 1;
        if (nextPage <= pageCount) {
            this.props.callback(nextPage);
        }
    }

    getClassNames(obj) {
        return classNames({
            'uk-active': obj.pageNumber === obj.currentPage,
            'uk-disabled': obj.nextPage > obj.pageCount
        });
    }

    render() {
        const { currentPage, renderOnOnlyOnePage } = this.props;
        const nextPage = currentPage + 1;
        const pageCount = this.getPageCount();
        const pageNumbers = this.getPageNumbers();
        let render = true;
        if (pageCount === 1 && !renderOnOnlyOnePage) {
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
                            <li key={index} className={this.getClassNames({ pageNumber, currentPage })}>
                                <a onClick={() => this.props.callback(pageNumber)} >{pageNumber}</a>
                            </li>
                        );
                    })}
                    <li className={this.getClassNames({ nextPage, pageCount })}>
                        {/* Check for if-else */}
                        <a onClick={(nextPage <= pageCount) ? () => this.nextPage() : null}>
                            <span uk-pagination-next=""></span>
                        </a>
                    </li>
                </ul>)
        );
    }
}

Pagination.propTypes = {
    itemsPerPageCount: PropTypes.number,
    totalItemsCount: PropTypes.number.isRequired,
    pageRange: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    renderOnOnlyOnePage: PropTypes.bool
}

export default Pagination;