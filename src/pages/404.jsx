import { Link }        from "../components/utils/LinkComponent";
import { Container }   from "../components/utils/ContainerComponent";
import { Banner404 }   from "../components/BannerComponents/Banner404component";
import React           from "react";
import image           from "../public/img/image.png";
import HeaderComponent from "../components/utils/HeaderComponent";

export default function tamplete404 (){
    return (
        <>
            <HeaderComponent/>
            <Container>
                <Banner404 src={image} alt="" />
                <Link href="/"><h2>Go to home</h2></Link>
            </Container>
        </>
    )
}