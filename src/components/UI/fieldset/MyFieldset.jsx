import React from "react";
import classes from './MyFieldset.module.css'

const MyFieldset = ({lable}) => {
    return (
        <fieldset class={classes.condemn__form}>
            <label for="convicted__datalist" class="form-label">
                {lable}
            </label>
            <input class="form-control" list="convicted__datalist" id="convicted__input" placeholder="Type to search..."/>
            
            <datalist class="convicted__list__container" id="convicted__datalist">
                <script id="convicted__template" type="text/x-handlebars-template">
                    {/* {{#each data}}
                        <option value="{{username}}" data-value="{{id}}"></option>
                    {{/each}} */}
                </script>
            </datalist>
        </fieldset>
    )
}

export default MyFieldset
