import { Banner }               from "../components/BannerComponents/BannerComponent";
import { Link }                 from "../components/utils/LinkComponent";
import { Box }                  from "../components/BoxComponents/BoxProductComponent";
import { CardProduct }          from "../components/CardComponent/CardProuctComponent";
import { BannerContainer }      from "../components/BannerComponents/BannerContainerComponente";
import { ImageCardProduct }     from "../components/CardComponent/ImageCardProductComponent";
import { useEffect, useState }  from "react";
import api                      from "../service/Api";
import React                    from "react";
import imageBanner              from "../public/img/banner.jpg" ;
import HeaderComponent          from "../components/utils/HeaderComponent";

export default function CatalogPage() {

    const [productList,setProductList] = useState()

    useEffect(()=>{
        api.get('/api/findall/products').then((response)=>{
            setProductList(response.data)
        })
    },[])

    return (
        <>
            <HeaderComponent/>
            <BannerContainer>
                <Banner src={imageBanner}/>
            </BannerContainer>
            <Box>
                {    
                    productList
                    ?
                    productList.map(item=>(
                        <Link href={`/product/${item.id}`}>
                            <CardProduct key={item.id}>
                                <ImageCardProduct src={item.image}/>
                                <h3>{item.name}</h3>
                                <h3>${item.price}</h3>
                            </CardProduct>
                        </Link>
                    ))
                    :
                    "No item registered"
                }
            </Box>
        </>
    )
}