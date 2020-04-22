/*
Copyright 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import * as React from "react";
import * as PropTypes from "prop-types";

// directly import the style here as this layer does not support rethemedex at this time so no matrix-react-sdk
// scss variables will be accessible.
import "../../../res/css/structures/ErrorView.scss";

interface IProps {
    // both of these should already be internationalised
    title: string;
    messages?: string[];
}

const ErrorView: React.FC<IProps> = ({title, messages}) => {
    return <div className="mx_ErrorView">
        <div className="mx_ErrorView_container">
            <div className="mx_HomePage_header">
              <span className="mx_HomePage_logo">
                  <img height="42" src={"themes/riot/img/logos/riot-logo.svg"} alt="Riot" />
              </span>
                <h1>Failed to start</h1>
            </div>
            <div className="mx_HomePage_col">
                <div className="mx_HomePage_row">
                    <div>
                        <h2 id="step1_heading">{ title }</h2>
                        {messages && messages.map(msg => <p key={msg}>
                            { msg }
                        </p>)}
                    </div>
                </div>
            </div>
            <div className="mx_HomePage_row mx_Center mx_Spacer">
                <p className="mx_Spacer">
                    <a href="https://riot.im" target="_blank" className="mx_FooterLink">
                        Go to Riot.im
                    </a>
                </p>
            </div>
        </div>
    </div>;
};

ErrorView.propTypes = {
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ErrorView;
