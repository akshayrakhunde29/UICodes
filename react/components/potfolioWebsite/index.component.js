import '../potfolioWebsite/index.css';
import HeaderComponent from "./header.component";
import MainComponent from "./main.component";
import FooterComponent from "./footer.component";
import ResumeComponent from "./resume.component";

export default function PotfolioWebsite ()
{
    return(
        <>
          <HeaderComponent /> 
          <MainComponent />
          <FooterComponent />
          <ResumeComponent />
        </>
    )
}