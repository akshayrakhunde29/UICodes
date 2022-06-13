import React from "react";
import '../Netflix/NetflixIndex.component.css';
import NetflixHeaderComponent from "./NetflixHeader.component";
import NetflixMainComponent from "./NetflixMain.component";
import NetflixRegisterComponent from "./NetflixRegister.component";

export default function NetflixIndexComponent()
{
    return(
        <div className="backImg text-white">
            <div className="backColor">
                <div>
                    <NetflixHeaderComponent />
                </div>
                <div>
                    <NetflixMainComponent />
                    <NetflixRegisterComponent />
                </div>
            </div>
        </div>
    )
}