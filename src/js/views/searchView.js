class SearchView {
    _parentEl = document.querySelector('.search');
    _errorMessage = 'We could not find that recipe. Please try another one.';
    _message = '';

    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }


}

export default new SearchView();