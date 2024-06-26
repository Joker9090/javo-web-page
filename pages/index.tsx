import { Shown } from '@/components/Shown';
import Head from 'next/head'
import React, { useState } from 'react';
import { FilterBar } from '@/components/FilterBar';
import Video from '@/components/video';
export type ItemType = {
  type: "large" | "small" | "banner" | "key-link";
  img?: string;
  text?: string;
  href?: string;
  height?: string;
  clickeable?: boolean;
  showOnlyOnFilter?: boolean;
  title?: string;
  category?: string;
  titleColor?: string;
  textAlign?: string;
  description?: string;
  descriptionColor?: string;
  minHeight?: string;
  mobileHeight?: string;
  mobileMinHeight?: string;
  fontSize?: number,
  video?: string,
  bkg?: string,
  extraClass?: string,
  secondaryMedia?: { src: string, position: string, type:string }[],
  secondaryVideos?: string[],
  details: string,

}

const text =
  <>
    hacemos
    <br />
    comunicación
    <br />
    visual
  </>

const description =
  <>
    Diseñamos y desarrollamos <br />
    proyectos efectivos <br />
    que potencian relatos<br />
    y fortalecen marcas.

  </>
const _text = text as unknown
const _description = description as unknown
const config: ItemType[] = [

  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    clickeable: true,
    img: "/images/img3.jpg",
    minHeight: "400px",
    height: "40vh",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    mobileHeight: "35vh",
    category: "campañas",
    secondaryMedia: [
      { src: "/images/img3.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img3.jpg", position: "top", type:"img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img4.jpg",
    minHeight: "400px",
    height: "40vh",
    category: "campañas",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/img4.jpg", position: "center", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img4.jpg", position: "top", type:"img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img5.jpg",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "35vh",
    category: "identidad",
    secondaryMedia: [
      { src: "/images/img5.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img5.jpg", position: "top", type:"img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img13.jpg",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "35vh",
    category: "identidad",
    secondaryMedia: [
      { src: "/images/img13.jpg", position: "top", type:"img" },
      { src: "/images/img12.jpg", position: "top", type:"img" },
      { src: "/images/img13.jpg", position: "top", type:"img" },
    ],
    secondaryVideos: [
      "/videos/banner.mp4",
    ]
  },


  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    minHeight: "500px",
    height: "500px",
    mobileHeight: "340px",
    mobileMinHeight: "720",
    fontSize: 70,
    // clickeable: true,
    title: _text as string,
    titleColor: "white",
    descriptionColor: "#FF5500",

    description: _description as string,
    textAlign: "left",
    category: "espacios",
    extraClass: "textModule",

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "IT Joven",
    titleColor: "white",
    textAlign: "end",
    minHeight: "500px",
    img: "/images/img8.jpg",
    height: "100vh",
    mobileHeight: "60vh",
    mobileMinHeight: "auto",
    category: "espacios",
    clickeable: true,
    secondaryMedia: [
      { src: "/videos/it_joven_02.mp4", position: "top", type:"video" },
      { src: "/images/it_joven_01.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_02.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_03.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_04.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_05.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_06.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_07.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_08.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_09.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_10.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_11.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_12.jpg", position: "top", type:"img" },
      { src: "/images/it_joven_13.jpg", position: "top", type:"img" },
    ],
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    clickeable: true,
    img: "/images/img14.jpg",
    category: "identidad",
    minHeight: "400px",
    mobileHeight: "35vh",
    height: "40vh",
    titleColor: "white",
    textAlign: "end",
    secondaryMedia: [
      { src: "/images/img14.jpg", position: "top", type:"img" },
      { src: "/images/img12.jpg", position: "top", type:"img" },
      { src: "/images/img14.jpg", position: "top", type:"img" },
    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "Clacso 2018",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img11.jpg",
    minHeight: "400px",
    category: "identidad",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/clacso_2018_01.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_02.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_03.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_04.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_05.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_06.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_07.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_08.jpg", position: "top", type:"img"},
      { src: "/images/clacso_2018_09.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_10.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_11.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_12.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_13.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_14.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_15.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_16.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_17.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_18.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_19.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_20.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_21.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_22.jpg", position: "top", type:"img" },
      { src: "/images/clacso_2018_23.jpg", position: "top", type:"img" }

    ]
  },
  {
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img6.jpg",
    minHeight: "400px",
    category: "nosotros",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/img6.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img6.jpg", position: "top", type:"img" },
    ]

  },
  {
    category: "nosotros",
    type: "small",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    clickeable: true,
    img: "/images/img7.jpg",
    minHeight: "400px",
    height: "40vh",
    mobileHeight: "35vh",
    secondaryMedia: [
      { src: "/images/img7.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img7.jpg", position: "top", type:"img" },
    ]

  },

  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    titleColor: "white",
    textAlign: "end",
    minHeight: "300px",
    height: "30vh",
    mobileHeight: "60vh",
    // mobileMinHeight: "auto",
    img: "/images/img10.jpg",
    clickeable: true,
    // title: "LARGE BUT SHORTER",
    category: "campañas",
    showOnlyOnFilter: false,
    secondaryMedia: [
      { src: "/images/img7.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img7.jpg", position: "top", type:"img" },
    ]
  },
  {
    type: "large",
    details: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia dolor debitis corrupti voluptate tenetur tempore sunt cupiditate. Deleniti, eligendi.",
    title: "lorem ipsum",
    img: "/images/img9.jpg",
    titleColor: "white",
    textAlign: "left",
    minHeight: "500px",
    height: "50vw",
    clickeable: true,
    showOnlyOnFilter: false,
    category: "identidad",
    extraClass: "proyects",
    mobileHeight: "60vh",
    secondaryMedia: [
      { src: "/images/img7.jpg", position: "top", type:"img" },
      { src: "/images/img2.jpg", position: "top", type:"img" },
      { src: "/images/img7.jpg", position: "top", type:"img" },
    ]
  },

]

export default function HomePage() {

  const [modalInfo, setModalInfo] = React.useState<ItemType>();

  const [activeFilter, setActiveFilter] = React.useState();

  const BuildSectionComponent = (item: ItemType, index: Number, setModalInfo: Function) => {

    switch (item.type) {
      case "large":
        // IT's THE SAME
        // return <SectionLarge  height={height} type={type} img={img} text={text} key={`SectionLarge-${index}`} />
        return <SectionLarge {...item} setModalInfo={setModalInfo} key={`SectionLarge-${index}`} />
      case "small":
        return <SectionSmall {...item} setModalInfo={setModalInfo} key={`SectionSmall-${index}`} />
      case "banner":
        return <SectionBanner {...item} setModalInfo={setModalInfo} key={`SectionBanner-${index}`} />
      case "key-link":
        return <SectionKeyLink {...item} setModalInfo={setModalInfo} key={`SectionKeyLink-${index}`} />
      default:
        return <></>
    }
  }
  const checkFilter = (item: ItemType) => {
    if (activeFilter) {
      return (item.category === activeFilter)
    } else {
      return (item.showOnlyOnFilter != true)
    }
  }

  React.useEffect(() => {
    const ele = document.querySelector('html')
    if (ele) {
      if (modalInfo) ele.style.overflow = 'hidden'
      else ele.style.overflow = 'auto'
    }
  }, [modalInfo])
  return (
    <>
      <Head>
        <title>Javo Web App</title>
        <meta name="description" content="Generated by Javo Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`stretch`}>
        <Home />
        <Video />
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <div className="container">
          <div className='container-fluid'>
            <div className='row'>
              {config.filter(checkFilter).map((item, index) => (BuildSectionComponent(item, index, setModalInfo)))}
            </div>
          </div>
        </div>

        {modalInfo && (<Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />)}
        <div className="container">

          <Footer />
        </div>
      </main>
    </>
  )
}
export const Home = () => {
  return (
    <div className="container ">
      <div className='Home stretch'>

        <div className='row justify-content-between align-items-center bannerContent'>
          <div className='w-fit-content d-flex'>
            <h1 className='f-150 f-helvetica f-heavy mb-0'>
              <span className='ls-n-7'>ai</span>
              <span className="ls-n-2">re</span>
            </h1>
          </div>
          <div className='w-fit-content d-flex flex-column bannerPhrase'>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 '><b>diseño</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 '><b>audiovisual</b></p>
            <p className='f-40 f-helvetica f-heavy lh-30 ls-n-2 mb-0 '><b>comunicación</b></p>
          </div>
        </div>

      </div>
    </div>
  )
}



export const SectionLarge = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,
    fontSize,
    extraClass,
    video
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex",

  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "black",
    fontSize: fontSize
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    // textShadow: "0px 0px 7px black",

  }
  if (video) {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          {/* <video src="/videos/banner.mp4" autoPlay={true} loop={true} muted={true} className='bannerVideo' id="myVideo"> */}
          {/* </video> */}
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  } else {
    return (
      <div className={`Section SectionLarge col-12 p-0 ${extraClass}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
        <Shown partiallyVisible={true} >
          <div className='SectionImage d-none d-md-flex' style={style} />
          <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
          {title || description ? (
            <div className='SectionText'>
              <div className='SectionTextHolder' style={textStyle}>
                {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
                {description && <p className='f-50 lh-48 description' style={descriptionStyle}><b>{description}</b></p>}
              </div>
            </div>
          ) : <></>}
        </Shown>
      </div>
    )
  }
}

export const SectionSmall = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    clickeable,
    title,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo,

  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vw",
    minHeight: minHeight ? minHeight : "auto",
    display: "flex"
  }

  const styleMobile = {
    backgroundImage: `url(${img})`,
    height: mobileHeight ? mobileHeight : height ? height : "50vw",
    minHeight: mobileMinHeight ? mobileMinHeight : minHeight ? minHeight : "50vw",
    display: "flex"
  }


  const titleStyle = {
    color: titleColor ? titleColor : "black"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "black"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    // textShadow: "0px 0px 7px black",
  }

  return (
    <div className={`Section SectionSmall col-12 col-md-6 p-0 ${clickeable ? "clickeable" : ""}`} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        <div className='SectionImage d-none d-md-flex' style={style} />
        <div className='SectionImage mobileImage d-flex d-md-none' style={styleMobile} />
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionBanner = (props: ItemType & { setModalInfo: Function }) => {
  const {
    text,
    type,
    img,
    height,
    title,
    clickeable,
    titleColor,
    textAlign,
    description,
    descriptionColor,
    minHeight,
    mobileHeight,
    mobileMinHeight,
    setModalInfo
  } = props;

  const style = {
    backgroundImage: `url(${img})`,
    height: height ? height : "50vh"
  }

  const titleStyle = {
    color: titleColor ? titleColor : "white"
  }

  const descriptionStyle = {
    color: descriptionColor ? descriptionColor : "white"
  }

  const textStyle = {
    justifyContent: textAlign ? textAlign : "start",
    display: "flex",
    flexDirection: "column" as "column",
    // textShadow: "0px 0px 7px black",
  }

  return (
    <div className='Section SectionBanner' style={style} onClick={() => { clickeable ? setModalInfo(props as ItemType) : () => { } }}>
      <Shown partiallyVisible={true} >
        {title || description ? (
          <div className='SectionText'>
            <div className='SectionTextHolder' style={textStyle}>
              {title && <p className='f-50 lh-48 title' style={titleStyle}><b>{title}</b></p>}
              {description && <p className='f-50 lh-48' style={descriptionStyle}><b>{description}</b></p>}
            </div>
          </div>
        ) : <></>}
      </Shown>
    </div>
  )
}

export const SectionKeyLink = ({
  type, href, setModalInfo
}: ItemType & { setModalInfo: Function }) => {
  return (
    <div className='SectionKeyLink' id={href} />
  )
}

export const Footer = () => {
  const content = [
    {
      title: "campañas",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
    {
      title: "ciudades",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "espacios",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    }, {
      title: "consultorias",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam magni alias perspiciatis tempora odio placeat quibusdam laboriosam."
    },
  ]
  const biographies = [
    {
      name: "Javier Cerruti",
      src: "/images/img1.jpg",
      key: "Javier",

      text: "Productor y realizador audiovisual. Integré y dirigí equipos de producción tanto a nivel público como privado adoptando como eje profesional la importancia de entender el lenguaje audiovisual como parte central de la estrategia comunicacional. Realicé numerosas campañas comerciales y dirigí la producción audiovisual de contenidos de comunicación del Gobierno Nacional entre 2019 y 2023.",
    },

    {
      name: "Gustavo Wald",
      src: "/images/img12.jpeg",
      key: "Gustavo",
      text: "Diseñador gráfico. Entiendo la emisión gráfica como el acto de comunicación visual en el cual el gesto gráfico condensa y corporiza aquello que se busca (o es bueno) decir. Mi trayectoria profesional resultó en especializarme en la mirada estratégica que fortalece el acto de comunicación. Estuve a cargo del diseño de la comunicación visual de la Ciudad de Buenos Aires y, recientemente, del Gobierno Nacional.",

    }
  ]
  const [activeBio, setActiveBio] = useState<string>("")
  const [bioText, setBioText] = useState<string>("")
  const [bioName, setBioName] = useState<string>("")
  const handleHover = (bio: string, text: string, name: string) => {
    setActiveBio(bio)
    setBioText(text)
    setBioName(name)
  }
  return (
    <div id='nosotros' className="footerContainer">
      <div className="titleWrapper">
        <div className="titleContent">
          <p className='title'>
            somos
          </p>
        </div>
        <div className="subtitleContent">
          <p className='subTitle'>
            un equipo que busca&nbsp;resolver
            cada nueva situación con&nbsp;potencia,
            buen&nbsp;diseño y eficacia.
          </p>
        </div>
      </div>

      <div className="textsContainer">

        <div className="textContent">
          <div className="textTitle">campañas</div>
          <div className="text">Encaminamos la solución visual de campañas comerciales y del universo público; en la dimensión y escala acorde a cada circunstancia.</div>
        </div>
        <div className="textContent">
          <div className="textTitle">ciudades</div>
          <div className="text">Abordamos el universo de comunicación visual que la gestión de ciudades requiere; con criterio global y práctico para la gestión y la comunidad.</div>
        </div> <div className="textContent">
          <div className="textTitle">espacios</div>
          <div className="text">Diseñamos espacios expositivos de alto impacto, combinando poder con sutileza. Experiencias sensoriales, bellas y efectivas que perfeccionan relatos y fortalecen marcas.</div>
        </div> <div className="textContent">
          <div className="textTitle">consultoria</div>
          <div className="text">Sabemos orientar, diseñar y optimizar equipos de diseño y producción audiovisual de organizaciones; en la búsqueda de maximizar sus potencialidades.</div>
        </div>

      </div>

      <div className="biographies">
        {biographies.map((b, i) => {
          return (
            <>
              <div className="biographie desktop" key={b.key} onMouseEnter={() => handleHover(b.key, b.text, b.key)} onMouseLeave={() => handleHover("", "", "")} >
                <div className={b.key === activeBio || activeBio === "" ? "biographieImg active" : "biographieImg inactive"} style={{ backgroundImage: `url(${b.src})` }} ></div>
                <div className={b.key === activeBio ? "biographieName active" : "biographieName"}><p> {b.name} </p>  </div>
              </div>


              <div className="biographie mobile" key={b.key} onMouseEnter={() => handleHover(b.key, b.text, b.key)} onMouseLeave={() => handleHover("", "", "")} >
                <div>
                  <div className={"biographieImg active"} style={{ backgroundImage: `url(${b.src})` }} ></div>
                  <div className={"biographieName"}><p> {b.name}: </p>  </div>
                </div>

              </div>
              <div className={"mobileBiographieText mobile"}>
                <p className='text'>
                  {b.text}
                </p>
              </div>



            </>
          )
        })}
        <div id='biographieText' className={activeBio !== "" ? "biographieText desktop d-md-flex" : "desktop d-none"}>
          {/* <p className='name'>
            {bioName}:
          </p> */}
          <p className='text'>
            {bioText}
          </p>
        </div>
      </div>


      <div className="finalContent d-flex">
        <div className="left">
          <div className="brand">
            aire
          </div>
          <div className="phrase">
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>diseño</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>audiovisual</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>comunicación</b></p>
          </div>
          <div className="city">
            <p>
              Buenos Aires
            </p>
          </div>
        </div>
        <div className="right">
          <div className="contact">
            xxxxxxxxx@gmail.com
          </div>
        </div>
      </div>
      {/* <div className="mobileFinalContent  d-flex d-md-none ">
        <div className="up">
          <div className="brand">
            aire
          </div>
          <div className="phrase">
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>diseño</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>audiovisual</b></p>
            <p className='f-30 f-helvetica f-heavy lh-25 ls-n-2 c-gray'><b>comunicación</b></p>
          </div>
        </div>
        <div className="down">
          <div className="city">
            <p>
              Buenos Aires
            </p>
          </div>
          <div className="contact">
            xxxxxxxxx@gmail.com
          </div>
        </div>
      </div> */}
    </div>
  )
}

export const Modal = ({ setModalInfo, modalInfo }: { setModalInfo: Function, modalInfo: ItemType }) => {
  const [active, setActive] = React.useState<Boolean>(false)
  const checkItems = modalInfo.secondaryMedia ? "Graphic" : "Video"
  const [selection, setSelection] = React.useState<"Video" | "Graphic">(checkItems)
  const lastImageChecker = (_index: number) => {
    _index = _index + 1
    const length = modalInfo.secondaryMedia?.length
    if (_index === length) {
      return true
    } else return false
  }

  if (modalInfo.secondaryMedia && modalInfo.secondaryVideos) {
    return (
      <div className='Modal-Wrapper'>
        <div className="modalBody">

          <div className="modalHeader">

            <div className='closer'>
              <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
                <img src="/icons/cruz.png" alt="" />
              </div>
            </div>
            <div className={`tabs`} >

              {modalInfo.secondaryVideos && (
                <div className={`imgBg tabSelector ${selection == "Video" ? "active" : ""}`} onClick={() => setSelection("Video")}>
                  <p className='mb-0 px-2  lh-32'>audiovisual</p>
                </div>
              )}
              {modalInfo.secondaryMedia && (
                <div className={`imgBg tabSelector ${selection == "Graphic" ? "active" : ""}`} onClick={() => setSelection("Graphic")}>
                  <p className='mb-0 px-2  lh-32'>gráfica</p>
                </div>
              )}
            </div>
          </div>
          <div className="modalContent">

            {selection === "Graphic" && modalInfo.secondaryMedia && (
              <div className='Graphic Video'>
                <div className="modalImages">
                  {modalInfo.secondaryMedia.map((image: { src: string, position: string, type:string }, index: number) => {
                    if(image.type == "img") {
                      return (
                        <img src={image.src} key={index} style={{ objectPosition: image.position }} className={lastImageChecker(index) ? "lastImg" : ""} alt="" />
                      )
                    } else {
                      return (
                        <video key={index} className="bannerVideo" autoPlay={true} muted loop src={image.src} typeof="video/mp4"></video>
                      )
                    }
                  })}
                </div>
              </div>
            )}
            {selection === "Video" && modalInfo.secondaryVideos && (
              <div className='Video'>
                <div className="modalImages">
                  {modalInfo.secondaryVideos.map((src, index) => {
                    return (
                      <video key={index} height={"100%"} className="bannerVideo" autoPlay={true} muted loop src={src} typeof="video/mp4"></video>
                    )
                  })}
                </div>
                {modalInfo.secondaryVideos.length > 2 && (
                  <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(true) }}>
                    <img src="/icons/chevronup.png" />
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='Modal-Wrapper'>
        <div className="modalBody">

          <div className="modalHeader">

            <div className='closer'>
              <div className="imgBg" onClick={() => { setModalInfo(undefined) }}>
                <img src="/icons/cruz.png" alt="" />
              </div>
            </div>
          </div>
          <div className="modalContent">

            {selection === "Graphic" && modalInfo.secondaryMedia && (
              <div className='Graphic'>
                <div className="modalImages">
                {modalInfo.secondaryMedia.map((image: { src: string, position: string, type:string }, index: number) => {
                    if(image.type == "img") {
                      return (
                        <img src={image.src} key={index} style={{ objectPosition: image.position }} className={lastImageChecker(index) ? "lastImg" : ""} alt="" />
                      )
                    } else {
                      return (
                        <video key={index} className="bannerVideo" autoPlay={true} muted loop src={image.src} typeof="video/mp4"></video>
                      )
                    }
                  })}
                </div>
              </div>
            )}
            {selection === "Video" && modalInfo.secondaryVideos && (
              <div className='Video'>
                <div className="modalImages">
                  {modalInfo.secondaryVideos.map((src, index) => {
                    return (
                      <video key={index} className="bannerVideo" autoPlay={true} muted loop src={src} typeof="video/mp4"></video>
                    )
                  })}
                </div>
                {modalInfo.secondaryVideos.length > 2 && (
                  <div className={`${active ? "d-none" : "modalButton"}`} onClick={() => { setActive(true) }}>
                    <img src="/icons/chevronup.png" />
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }

}


