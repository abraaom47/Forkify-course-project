import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel V2

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        })
    }

    _generateMarkupButton(type = 'next') {
        const currentPage = this._data.page;
        if(type === 'next'){
            return `
                <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${currentPage + 1}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>`;
        };

        return `
            <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>`
    }

    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there other pages
        if(currentPage === 1 && numPages > 1) {
            return this._generateMarkupButton('next');
        }        
        // Page 1, and there NO other pages
        if(currentPage === 1 && numPages === 1) {
            return '';
        }
        // Last page
        if(currentPage === numPages) {
            return this._generateMarkupButton('previous');
        }
        // Other page
        if(currentPage <= numPages) {
            return this._generateMarkupButton('next') + this._generateMarkupButton('previous');
        }
    }
}

export default new PaginationView();