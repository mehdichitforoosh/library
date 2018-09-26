import React from 'react';

class AddBook extends React.Component {

    render() {
        return (
            <div className="uk-container uk-padding">
                <form>
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">کتاب جدید</legend>
                        <div className="uk-margin">
                            <input class="uk-input uk-form-width-large" type="text" placeholder="نام" />
                        </div>
                        <div className="uk-margin">
                            <select className="uk-select uk-form-width-large">
                                <option>خصوصی</option>
                                <option>عمومی</option>
                                <option>دانشگاهی</option>
                            </select>
                        </div>
                        <div className="uk-margin">
                            <textarea className="uk-textarea uk-form-width-large" rows="5" placeholder="آدرس"></textarea>
                        </div>
                    </fieldset>
                </form>
                <div uk-margin="">
                    <button className="uk-button uk-button-primary uk-margin-small-left">ذخیره</button>
                    <button className="uk-button uk-button-default">انصراف</button>
                </div>
            </div>
        );
    }
}

export default AddBook;