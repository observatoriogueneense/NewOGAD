import React, { useEffect, useState } from 'react'
import './Atual.css'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import SubFooter from '../../Components/SubFooter/SubFooter'
import Footer from '../../Components/Footer/Footer'
import Humburguer from '../../Components/Humburguer/Humburguer'
import api from '../../AdmScreens/api'


export default function Atual() {
    const [post, setPost] = useState()
    const [show, setShow] = useState("")
    const [contact, setContact] = useState({})
    
    const getData = async ()=>{
        try {
            const res = await api.get("/atual")
            setPost(res.data)
            // console.log(res.data)
            const ress = await api.get("/contato")
            setContact(ress.data[0])
            // console.log(ress.data[1])
        } catch (error) {}
    }

    const getSlide = (data)=>{
        window.location.replace(`/atualidade/${data}`);
      }

    
    useEffect(()=>{
        getData()
        setShow("")
    }, [])

    // const verify = (id)=>{
    //     if(show === id){
    //         setShow(" ")
    //     }else{
    //         setShow(id)
    //     }
    // }

  return (
    <div className='Atual'>
        <Header />
        <Humburguer />
        <Menu select={"inicio"} />
        <div className="fullAtualContent">
            <div className="oitentAtual">
                <div className="NoticiaContent">
                {post?.map((d)=>(
                <div className="cardAtual" key={d._id}>
                        <div className="imagemAtual">
                            <img src={d.img} alt="" className="imgAtual" />
                            <img src="././cgadt.png" alt="" className="imgLogoAtual" />
                        </div>
                        <div className="allTextAtual">
                            <div className="titleAtual">
                                {d.title}
                            </div>
                            <div className="regiaoAtual">Notícias / Redenção-CE</div>
                            {show === d._id ? (
                                <div id="descAtual" className={d._id}>
                                    <p className='allTextVizible'>
                                        {d.text}
                                    </p>
                                </div>

                            ):(
                                <div id="descAtual" className={d._id}>
                                <p className='textVizible'>
                                    {d.text}
                                </p>
                                </div> 
                            )}
                            <div className="iconAtual">
                                <button className="buttonIconAtual" onClick={()=>getSlide(d._id)}>
                                    Ler mais
                                    <i className="fa-solid fa-angles-right iconBuGo"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="localContent">
                    <div className="associacaoFour">
                        <div className="conTentCarAss">
                            <div className="contentAssociacaoCard">
                                <div className="TitleAssociacao">Sede Social da CGAD</div>
                                <div className="localAssociacao">
                                <i className="fa-solid fa-map-location-dot"></i><i className="locationAsso">{contact.endereco}</i>
                                </div>
                                <div className="celularAssociacao">
                                    <i className="fa-solid fa-phone"></i><i className="locationAsso">{contact.cell}</i>
                                </div>
                                <div className="emailAssociacao">
                                    <i className="fa-solid fa-envelope"></i><i className="locationAsso">{contact.email}</i>
                                </div>
                            </div>
                        </div>
                        <div className="conTentCarAssFour">
                            <div className="contentAssociacaoCard marginTopAssociacaao">
                                <div className="logoAssociacao"><img src="././cgadt.png" alt="" className="logoimgAssociacao" /></div>
                                <div className="TitleAssociacao">Slogan da CGAD</div>
                                <div className="emailAssociacao">
                                    <i className="locationAsso">
                                        {contact.slogan}
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <SubFooter />
      <Footer />
    </div>
  )
}
