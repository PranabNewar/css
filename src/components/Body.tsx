import React, { useEffect, useState } from "react";
import com0 from "../assets/images/asset 0.svg";
import com1 from "../assets/images/asset 1.svg";
import com2 from "../assets/images/asset 2.svg";
import com3 from "../assets/images/asset 3.svg";
import com4 from "../assets/images/asset 4.svg";
import com5 from "../assets/images/asset 5.svg";
import com6 from "../assets/images/asset 6.svg";
import com7 from "../assets/images/asset 7.svg";
import com8 from "../assets/images/asset 8.svg";
import com9 from "../assets/images/asset 9.svg";
import com10 from "../assets/images/asset 10.svg";
import com11 from "../assets/images/asset 11.svg";
import seoImg from "../assets/images/seo-img.svg";
import userImg from "../assets/images/asset 18.jpeg";
import ceoImg from "../assets/images/asset 19.jpeg";
import testImg from "../assets/images/asset 21.jpeg";
import logo from "../assets/images/logo.png";

// import contentImg from "../assets/images/";

import contentMarket from "../assets/images/viral-marketing-svgrepo-com (1).svg";
import MobileWhatInSide from "./MobileWhatInSide";

function Body() {
  const [showId, setShowId] = useState(1);
  const [position, setPosition] = useState(1);
  const [activeId, setActiveId] = useState(1);
  const [companyPosition, setCompanyPosition] = useState(1);
  const [testHeading, setTestHeading] = useState("");
  const [textPosition, setTestPosition] = useState(1);
  const [testTotalCount, setTestTotalCount] = useState(4);
  const [testActiveId, setTestActive] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [langDropOpen, setLangDropOpen] = useState(false);
  const [headId, setHeadId] = useState(1);
  const [next, setNext] = useState(1);
  const [nextCount, setNextCount] = useState(1);
  const [heading, setHeading] = useState("");
  // const [nextSubPosition,setNextSubPosition] = useState(0)
  // const [testActive,setTestActive] = useState()

  const featureDetailsList = [
    {
      id: 1,
      title:
        "Grow organic traﬃc with our complete and easy SEO tools & workﬂow",
      subtitle1: "Uncover millions of national & local keywords",
      subtitle2: "Analyze any domain’s backlink profile",
      subtitle3: "Run technical SEO audits",
      subtitle4: "Track your SERP positions daily",
      image: seoImg,
    },
    {
      id: 2,
      title: "Create content that ranks (no expert knowledge required)",
      subtitle1: "Find topics that resonate with your audience",
      subtitle2: "Get actionable tips to create SEO-friendly content",
      subtitle3: "Optimize your content for engagement and organic traffic",
      subtitle4: "Use AI features to easily rewrite and improve your copy",
      image: seoImg,
    },
    {
      id: 3,
      title: "Unveil your competitors’ marketing strategy and tactics",
      subtitle1: "Analyze traffic of any website",
      subtitle2: "Get actionable tips to create SEO-friendly content",
      subtitle3: "Optimize your content for engagement and organic traffic",
      subtitle4: "Use AI features to easily rewrite and improve your copy",
      image: seoImg,
    },
    {
      id: 4,
      title: "Discover how to reach more prospects while spending less",
      subtitle1: "Analyze traffic of any website",
      subtitle2: "Get actionable tips to create SEO-friendly content",
      subtitle3: "Optimize your content for engagement and organic traffic",
      subtitle4: "Use AI features to easily rewrite and improve your copy",
      image: seoImg,
    },
    {
      id: 5,
      title: "Build your most effective social media strategy",
      subtitle1: "Analyze traffic of any website",
      subtitle2: "Get actionable tips to create SEO-friendly content",
      subtitle3: "Optimize your content for engagement and organic traffic",
      subtitle4: "Use AI features to easily rewrite and improve your copy",
      image: seoImg,
    },
    {
      id: 6,
      title: "Streamline your agency processes for growth",
      subtitle1: "Analyze traffic of any website",
      subtitle2: "Get actionable tips to create SEO-friendly content",
      subtitle3: "Optimize your content for engagement and organic traffic",
      subtitle4: "Use AI features to easily rewrite and improve your copy",
      image: seoImg,
    },
  ];
  const images = [
    { id: 1, image: com0 },
    { id: 2, image: com1 },
    { id: 3, image: com2 },
    { id: 4, image: com3 },
    { id: 5, image: com4 },
    { id: 6, image: com5 },
    { id: 7, image: com6 },
    { id: 8, image: com7 },
    { id: 9, image: com8 },
    { id: 10, image: com9 },
    { id: 11, image: com10 },
  ];

  // const testimonials = [
  //   {
  //     id: 1,
  //     heading: "makingSuit",
  //     test: [
  //       {
  //         id: 1,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 4,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     heading: "seo",
  //     test: [
  //       {
  //         id: 1,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 4,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     heading: "contentMarketing",
  //     test: [
  //       {
  //         id: 1,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 4,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     heading: "marketResearch",
  //     test: [
  //       {
  //         id: 1,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     heading: "advertising",
  //     test: [
  //       {
  //         id: 1,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 4,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     heading: "socialMedia",
  //     test: [
  //       {
  //         id: 1,

  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 2,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //       {
  //         id: 3,
  //         para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
  //         name: "Casey Camilleri Marx",
  //         image: testImg,
  //         company: "Digital Marketing Director, Nlyte Software",
  //       },
  //     ],
  //   },
  // ];

  const testimonials = [
    {
      id: 1,
      head_id: 1,
      heading: "makingSuit",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "makingSuit",

      id: 2,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "makingSuit",

      id: 3,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "makingSuit",

      id: 4,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },

    {
      id: 5,
      head_id: 2,

      heading: "seo",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "seo",
      id: 6,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "seo",
      id: 7,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "seo",
      id: 8,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },

    {
      id: 9,
      head_id: 3,

      heading: "contentMarketing",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "contentMarketing",

      id: 10,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "contentMarketing",

      id: 11,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "contentMarketing",

      id: 12,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },

    {
      id: 13,
      head_id: 4,

      heading: "marketResearch",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "marketResearch",
      id: 14,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "marketResearch",
      id: 15,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },

    {
      id: 16,
      head_id: 5,

      heading: "advertising",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "advertising",
      id: 17,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "advertising",
      id: 19,
      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      heading: "advertising",
      id: 20,

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },

    {
      id: 21,
      head_id: 6,

      heading: "socialMedia",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      id: 22,
      heading: "socialMedia",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
    {
      id: 23,
      heading: "socialMedia",

      para: "I've been using Semrush for 7+ years now and heavily rely on it to help me move whatever site I'm working on to the top of Google. ",
      name: "Casey Camilleri Marx",
      image: testImg,
      company: "Digital Marketing Director, Nlyte Software",
    },
  ];

  // const updatePosition = () => {
  //   // setCompanyPosition()
  //   setCompanyPosition(-companyPosition * 2);
  //   set
  // };
  // useEffect(() => {
  //   let counter = 0;
  //   const intervalId = setInterval(function () {
  //     console.log(counter, "counter");
  //     if (counter > 6) {
  //       counter = 0;
  //     }
  //     if (counter === 0) {
  //       setCompanyPosition(4);
  //     }
  //     setCompanyPosition(-counter * 120);

  //     counter += 6;
  //   }, 2000);

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);
  // useEffect(() => {
  //   setPosition(window.innerWidth);
  // }, [window.innerWidth]);
  function moveLeft(id: number) {
    setActiveId(id);
    if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      console.log("width", window.innerWidth);
      // setPosition(window.innerWidth);

      if (id !== position) {
        setPosition((-id + 1) * 940);
      }
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      // setPosition(window.innerWidth);
      if (id !== position) {
        setPosition((-id + 1) * 690);
      }
    }
    if (window.innerWidth >= 1280) {
      // setPosition(window.innerWidth);

      if (id !== position) {
        setPosition((-id + 1) * 1200);
      }
    }
  }

  function testSlide(id: number, heading: string) {
    setNextCount(1);
    setTestHeading(heading);
    setTestActive(id);
    if (id === 1) {
      setBackgroundColor("#c9edff");
    }
    if (id === 2) {
      setBackgroundColor("#edffa8");
    }

    if (id === 3) {
      setBackgroundColor("#baffd6");
    }
    if (id === 4) {
      setBackgroundColor("#ffe3c9");
    }
    if (id === 5) {
      setBackgroundColor("#e8d1e8");
    }
    if (id === 6) {
      setBackgroundColor("#facfd6");
    }
    const headId = testimonials.filter((res) => res.head_id === id);
    console.log("🚀 ~ file: Body.tsx:525 ~ testSlide ~ headId:", headId);
    setHeadId(id);
    const headCount = testimonials.filter((res) => res.heading === heading);
    console.log("🚀 ~ file: Body.tsx:528 ~ testSlide ~ headCount:", headCount);
    setNext(headId[0].id);
    setTestTotalCount(headCount.length);
    if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      setTestPosition((-headId[0].id + 1) * 730);
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setTestPosition((-headId[0].id + 1) * 610);
    }
    if (window.innerWidth >= 1280) {
      setTestPosition((-headId[0].id + 1) * 830);
    }

    console.log("clicked");
  }

  function subNext() {
    console.log("clicked");
    // const headCount = testimonials.filter((res) => res. === heading);
    // console.log("🚀 ~ file: Body.tsx:528 ~ testSlide ~ headCount:", headCount);
    if (nextCount < testTotalCount) {
      if (headId > 6) {
        setHeadId(1);
        setNext(1);
        return;
      }

      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setTestPosition(-next * 730);

        setNext(next + 1);
        setNextCount(nextCount + 1);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setTestPosition(-next * 610);

        setNext(next + 1);
        setNextCount(nextCount + 1);
      }
      if (window.innerWidth >= 1280) {
        setTestPosition(-next * 830);

        setNext(next + 1);
        setNextCount(nextCount + 1);
      }

      if (next === 1) {
        setTestPosition(-(next + 1) * 730);
      }

      console.log("🚀 ~ file: Body.tsx:617 ~ subNext ~ next:", next);
      if (nextCount === testTotalCount - 1) {
        setHeadId(headId + 1);
        return;
      }
    } else {
      // setHeadId(headId + 1);
      console.log("🚀 ~ file: Body.tsx:670 ~ subNext ~ headId:", headId);

      if (headId === 1) {
        setBackgroundColor("#c9edff");
      }
      if (headId === 2) {
        setBackgroundColor("#edffa8");
      }

      if (headId === 3) {
        setBackgroundColor("#baffd6");
      }
      if (headId === 4) {
        setBackgroundColor("#ffe3c9");
      }
      if (headId === 5) {
        setBackgroundColor("#e8d1e8");
      }
      if (headId === 6) {
        setBackgroundColor("#facfd6");
      }
      setTestActive(headId);
      if (headId > 6) {
        setHeadId(1);
        return;
      }
      // set()
      const hId = testimonials.filter((res) => res.head_id === headId);
      console.log("🚀 ~ file: Body.tsx:615 ~ subNext ~ hId:", hId);
      const headCount = testimonials.filter(
        (res) => res.heading === hId[0].heading
      );

      setTestTotalCount(headCount.length);

      // setHeadId(headId + 1);
      setTestPosition(-hId[0].id * 730);
      console.log("🚀 ~ file: Body.tsx:615 ~ subNext ~ headId:", headId);
      console.log("🚀 ~ file: Body.tsx:677 ~ subNext ~ hId[0].id :", hId[0].id);

      setNext(hId[0].id + 1);
      setNextCount(1);
    }
    console.log("🚀 ~ file: Body.tsx:670 ~ subNext ~ headId:", headId);
  }

  function subPrev() {
    console.log("clicked");
    // const headCount = testimonials.filter((res) => res. === heading);
    // console.log("🚀 ~ file: Body.tsx:528 ~ testSlide ~ headCount:", headCount);
    if (nextCount < testTotalCount) {
      if (headId < 1) {
        setHeadId(1);
        setNext(1);
      }
      setTestPosition((next + 1) * 730);
      setNext(next - 1);
      setNextCount(nextCount + 1);
      console.log("🚀 ~ file: Body.tsx:617 ~ subNext ~ next:", next);
    } else {
      setHeadId(headId - 1);

      if (headId === 1) {
        setBackgroundColor("#c9edff");
      }
      if (headId === 2) {
        setBackgroundColor("#edffa8");
      }

      if (headId === 3) {
        setBackgroundColor("#baffd6");
      }
      if (headId === 4) {
        setBackgroundColor("#ffe3c9");
      }
      if (headId === 5) {
        setBackgroundColor("#e8d1e8");
      }
      if (headId === 6) {
        setBackgroundColor("#facfd6");
      }
      setTestActive(headId);
      if (headId < 1) {
        setHeadId(1);
      }

      const hId = testimonials.filter((res) => res.head_id === headId);
      console.log("🚀 ~ file: Body.tsx:615 ~ subNext ~ hId:", hId);
      const headCount = testimonials.filter(
        (res) => res.heading === hId[0].heading
      );

      setTestTotalCount(headCount.length);

      // setHeadId(headId + 1);
      setTestPosition(hId[0].id * 730);
      console.log("🚀 ~ file: Body.tsx:615 ~ subNext ~ headId:", headId);

      setNext(hId[0].id);
      setNextCount(1);
    }
  }
  // function subNext() {}
  return (
    <div>
      <main>
        <div className="first-wrapper"></div>
        <div className="first-section-container">
          <div className="first-section ">
            <div className="first-heading first-container">
              <div className="first-desc">
                <h1>Get measurable results from online marketing</h1>
                <p>
                  Do SEO, content marketing, competitor research,
                  <br className="wrap-l" /> PPC and social media marketing from
                  just one platform.
                </p>
              </div>

              <div className="search-input">
                <div className="search-wrapper">
                  <input
                    type="text"
                    placeholder="Enter domain, keyword or URL "
                  />

                  <div className="country"></div>
                </div>

                <a href="#" className="orange-btn search-btn">
                  Start now{" "}
                </a>
              </div>

              <div className="companies">
                <h3>Trusted by the world’s leading brands</h3>
                <div
                  className="company-names"
                  style={{
                    transform: `translateX(${companyPosition}px)`,
                    transition: "0.5s ease-in",
                  }}
                >
                  {images.map((res) => (
                    <img src={res.image} alt="company" />
                  ))}
                </div>
              </div>
            </div>
            <div className="second-heading">
              <div className="second-head-title">
                <h1>See what's inside</h1>
              </div>
            </div>
            {window.innerWidth > 767 ? (
              <div className="feature-slider">
                <div className="features-tab">
                  <div
                    className={`seo feature item-center ${
                      activeId === 1 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(1)}
                  >
                    <svg
                      fill="#808080"
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      stroke="#808080"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M497.453,241.022l-43.995-114.147l43.984-113.132c1.207-3.104,0.805-6.603-1.077-9.352C494.485,1.644,491.37,0,488.039,0 H23.961c-5.571,0-10.089,4.517-10.089,10.089v491.823c0,5.571,4.517,10.089,10.089,10.089h50.443 c5.571,0,10.089-4.517,10.089-10.089V254.739h403.547c3.325,0,6.437-1.638,8.318-4.381 C498.239,247.618,498.649,244.124,497.453,241.022z M64.315,491.823H34.049V20.177h30.266V491.823z M84.493,234.562V20.177 h388.801l-40.056,103.025c-0.912,2.342-0.916,4.94-0.011,7.284l40.113,104.075H84.493z" />{" "}
                              <path d="M135.566,66.837h47.291c5.571,0,10.089-4.517,10.089-10.089s-4.517-10.089-10.089-10.089h-47.291 c-18.427,0-33.419,14.992-33.419,33.419v23.961c0,18.427,14.992,33.419,33.419,33.419c0.537,0,1.062-0.054,1.576-0.135 c0.514,0.081,1.039,0.135,1.576,0.135h20.808c7.302,0,13.241,5.94,13.241,13.241v23.961c0,7.302-5.94,13.241-13.241,13.241 h-47.291c-5.571,0-10.089,4.517-10.089,10.089c0,5.571,4.517,10.089,10.089,10.089h47.291c18.427,0,33.419-14.992,33.419-33.419 V150.7c0-18.427-14.992-33.419-33.419-33.419h-20.808c-0.537,0-1.062,0.054-1.576,0.135c-0.515-0.081-1.039-0.135-1.576-0.135 c-7.302,0-13.241-5.94-13.241-13.241V80.079C122.325,72.777,128.265,66.837,135.566,66.837z" />{" "}
                              <path d="M246.542,66.837h47.291c5.571,0,10.089-4.517,10.089-10.089s-4.517-10.089-10.089-10.089h-47.291 c-18.427,0-33.419,14.992-33.419,33.419v47.291v47.291c0,18.427,14.992,33.419,33.419,33.419h47.291 c5.571,0,10.089-4.517,10.089-10.089c0-5.571-4.517-10.089-10.089-10.089h-47.291c-7.302,0-13.241-5.94-13.241-13.241v-37.202 h60.532c5.571,0,10.089-4.517,10.089-10.089s-4.517-10.089-10.089-10.089H233.3V80.079 C233.3,72.777,239.24,66.837,246.542,66.837z" />{" "}
                              <path d="M381.478,46.66h-23.961c-18.427,0-33.419,14.992-33.419,33.419v94.581c0,18.427,14.992,33.419,33.419,33.419h23.961 c18.427,0,33.419-14.992,33.419-33.419V80.079C414.896,61.652,399.905,46.66,381.478,46.66z M394.719,174.66 c0,7.302-5.94,13.241-13.241,13.241h-23.961c-7.302,0-13.241-5.94-13.241-13.241V80.079c0-7.302,5.94-13.241,13.241-13.241 h23.961c7.302,0,13.241,5.94,13.241,13.241V174.66z" />{" "}
                              <path d="M316.532,293.833c0-5.571-4.517-10.089-10.089-10.089h-186.64c-5.571,0-10.089,4.517-10.089,10.089 s4.517,10.089,10.089,10.089h186.64C312.015,303.921,316.532,299.404,316.532,293.833z" />{" "}
                              <path d="M479.212,324.099H296.355c-5.571,0-10.089,4.517-10.089,10.089s4.517,10.089,10.089,10.089h182.857 c5.571,0,10.089-4.517,10.089-10.089S484.783,324.099,479.212,324.099z" />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <p> SEO</p>
                  </div>
                  <div
                    className={` feature item-center ${
                      activeId === 2 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(2)}
                  >
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      mirror-in-rtl="true"
                    >
                      <circle fill="#494c4e" cx="7" cy="10" r="1" />
                      <circle fill="#494c4e" cx="7" cy="14" r="1" />
                      <circle fill="#494c4e" cx="7" cy="18" r="1" />
                      <path
                        fill="#494c4e"
                        d="M17.075 11H11.04c-.552 0-1-.448-1-1s.448-1 1-1h6.035c.553 0 1 .448 1 1s-.447 1-1 1zM17.075 15H11.04c-.552 0-1-.448-1-1s.448-1 1-1h6.035c.553 0 1 .448 1 1s-.447 1-1 1zM17.075 19H11.04c-.552 0-1-.447-1-1s.448-1 1-1h6.035c.553 0 1 .447 1 1s-.447 1-1 1z"
                      />
                      <path
                        fill="#494c4e"
                        d="M20 2h-3c0-1.1-.9-2-2-2H9C7.9 0 7 .9 7 2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 3.5v-1c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5zm11 18v.003c-.003.275-.225.497-.5.497H4.515l-.015.003c-.276 0-.5-.224-.5-.5V4.5c0-.276.224-.5.5-.5H7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2h2.5c.277 0 .5.224.5.5v17z"
                      />
                    </svg>
                    <p>Content Marketing</p>
                  </div>
                  <div
                    className={`market-research feature item-center ${
                      activeId === 3 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(3)}
                  >
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      mirror-in-rtl="true"
                    >
                      <circle fill="#808080" cx="7" cy="10" r="1" />
                      <circle fill="#808080" cx="7" cy="14" r="1" />
                      <circle fill="#808080" cx="7" cy="18" r="1" />
                      <path
                        fill="#808080"
                        d="M17.075 11H11.04c-.552 0-1-.448-1-1s.448-1 1-1h6.035c.553 0 1 .448 1 1s-.447 1-1 1zM17.075 15H11.04c-.552 0-1-.448-1-1s.448-1 1-1h6.035c.553 0 1 .448 1 1s-.447 1-1 1zM17.075 19H11.04c-.552 0-1-.447-1-1s.448-1 1-1h6.035c.553 0 1 .447 1 1s-.447 1-1 1z"
                      />
                      <path
                        fill="#808080"
                        d="M20 2h-3c0-1.1-.9-2-2-2H9C7.9 0 7 .9 7 2H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 3.5v-1c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5h-5c-.276 0-.5-.224-.5-.5zm11 18v.003c-.003.275-.225.497-.5.497H4.515l-.015.003c-.276 0-.5-.224-.5-.5V4.5c0-.276.224-.5.5-.5H7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2h2.5c.277 0 .5.224.5.5v17z"
                      />
                    </svg>
                    <p>Market Research</p>
                  </div>
                  <div
                    className={`Advertising feature item-center ${
                      activeId === 4 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(4)}
                  >
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 32 32"
                      enable-background="new 0 0 32 32"
                      id="Layer_1"
                      version="1.1"
                      xml:space="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#808080"
                      stroke="#808080"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="advertising_1_">
                          {" "}
                          <path
                            d="M23.5,17.092c-0.055,0-0.111-0.009-0.165-0.028C23.134,16.994,23,16.805,23,16.592V13h-2.5 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3c0.276,0,0.5,0.224,0.5,0.5v2.658l2.358-2.969C26.453,12.069,26.598,12,26.75,12 h2.75c0.276,0,0.5-0.225,0.5-0.5v-9C30,2.225,29.776,2,29.5,2h-15C14.224,2,14,2.225,14,2.5v9c0,0.275,0.224,0.5,0.5,0.5h2 c0.276,0,0.5,0.224,0.5,0.5S16.776,13,16.5,13h-2c-0.827,0-1.5-0.673-1.5-1.5v-9C13,1.673,13.673,1,14.5,1h15 C30.327,1,31,1.673,31,2.5v9c0,0.827-0.673,1.5-1.5,1.5h-2.509l-3.1,3.902C23.795,17.024,23.649,17.092,23.5,17.092z"
                            fill="#263238"
                          />{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path
                                  d="M18.5,17.996v1c1.103,0,2,0.897,2,2s-0.897,2-2,2v1c1.654,0,3-1.346,3-3S20.154,17.996,18.5,17.996z"
                                  fill="#263238"
                                />{" "}
                              </g>{" "}
                              <path
                                d="M6.927,24.563l0.485,5.135l-1.519,0.305L5.865,30.03l-0.839-5.468h-1.01l0.873,5.673 c0.12,0.451,0.532,0.767,1.002,0.767c0.065,0,0.132-0.006,0.198-0.02l1.519-0.305c0.264-0.052,0.489-0.204,0.636-0.428 c0.147-0.224,0.197-0.491,0.15-0.696l-0.465-4.991H6.927z"
                                fill="#263238"
                              />{" "}
                              <g>
                                {" "}
                                <path
                                  d="M8.5,18C8.224,18,8,17.776,8,17.5S8.224,17,8.5,17c2.556,0,5.222-0.97,7.709-2.806 c0.223-0.163,0.535-0.116,0.699,0.105c0.164,0.223,0.117,0.535-0.105,0.699C14.143,16.962,11.271,18,8.5,18z"
                                  fill="#263238"
                                />{" "}
                                <path
                                  d="M18.5,29.607c-0.135,0-0.271-0.055-0.369-0.163c-0.041-0.044-4.137-4.448-9.668-4.448H3.375 C2.11,24.996,1,23.881,1,22.609v-3.252c0-1.28,1.088-2.361,2.375-2.361L6.5,17C6.777,17,7,17.225,7,17.501 C7,17.776,6.776,18,6.5,18h0l-3.125-0.004C2.63,17.996,2,18.619,2,19.357v3.252c0,0.726,0.656,1.387,1.375,1.387h5.087 c5.981,0,10.229,4.579,10.407,4.774c0.186,0.204,0.172,0.52-0.032,0.706C18.741,29.563,18.621,29.607,18.5,29.607z"
                                  fill="#263238"
                                />{" "}
                              </g>{" "}
                              <rect
                                fill="#263238"
                                height="6.918"
                                width="1"
                                x="8"
                                y="17.537"
                              />{" "}
                              <g>
                                {" "}
                                <path
                                  d="M18.5,29.996c-0.276,0-0.5-0.224-0.5-0.5v-17c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v17 C19,29.772,18.776,29.996,18.5,29.996z"
                                  fill="#263238"
                                />{" "}
                              </g>{" "}
                              <g>
                                {" "}
                                <path
                                  d="M4.5,22h-1C3.224,22,3,21.776,3,21.5S3.224,21,3.5,21h1C4.776,21,5,21.224,5,21.5S4.776,22,4.5,22z"
                                  fill="#263238"
                                />{" "}
                              </g>{" "}
                              <g>
                                {" "}
                                <path
                                  d="M4.5,20h-1C3.224,20,3,19.776,3,19.5S3.224,19,3.5,19h1C4.776,19,5,19.224,5,19.5S4.776,20,4.5,20z"
                                  fill="#263238"
                                />{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                d="M19,10.5l6-7L19,10.5z"
                                fill="#263238"
                              />{" "}
                              <path
                                d="M19,11c-0.115,0-0.231-0.039-0.325-0.12c-0.21-0.18-0.234-0.496-0.054-0.705l6-7 c0.181-0.21,0.496-0.233,0.705-0.055c0.21,0.18,0.234,0.496,0.054,0.705l-6,7C19.281,10.94,19.141,11,19,11z"
                                fill="#263238"
                              />{" "}
                            </g>{" "}
                            <path
                              d="M24.5,11c-0.451,0-1.5-0.195-1.5-2c0-1.74,0.94-2,1.5-2S26,7.26,26,9C26,10.805,24.951,11,24.5,11z M24.5,8C24.313,8,24,8,24,9s0.363,1,0.5,1S25,10,25,9S24.687,8,24.5,8z"
                              fill="#263238"
                            />{" "}
                            <path
                              d="M19.5,7C19.049,7,18,6.805,18,5c0-1.74,0.94-2,1.5-2S21,3.26,21,5C21,6.805,19.951,7,19.5,7z M19.5,4 C19.313,4,19,4,19,5s0.363,1,0.5,1S20,6,20,5S19.687,4,19.5,4z"
                              fill="#263238"
                            />{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <p>Advertising</p>
                  </div>
                  <div
                    className={`social-media feature item-center ${
                      activeId === 5 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(5)}
                  >
                    <svg
                      fill="#808080"
                      height="40px"
                      width="40px"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 469.635 469.635"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      enable-background="new 0 0 469.635 469.635"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path d="m84.716,207.572l-24.022-.072c-0.609,0-1.104-0.496-1.104-1.106v-119.638c0-2.841-1.605-5.438-4.146-6.708l-27.235-13.618 27.235-13.617c2.54-1.27 4.146-3.867 4.146-6.708v-30c0-0.609 0.495-1.104 1.104-1.104h331.749c0.609,0 1.104,0.496 1.104,1.104v168.967c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-168.968c0-8.88-7.225-16.104-16.104-16.104h-331.749c-8.88,0-16.104,7.225-16.104,16.104v25.365l-36.506,18.253c-2.54,1.27-4.146,3.867-4.146,6.708s1.604,5.438 4.146,6.708l36.506,18.253v115.003c0,8.881 7.225,16.106 16.082,16.106l23.999,.072c4.154,0 7.51-3.343 7.522-7.478 0.013-4.142-3.336-7.51-7.477-7.522z" />{" "}
                          <path d="m465.696,245.955c0-21.165-17.219-38.383-38.383-38.383l-93.894,.001c16.563-30.455 25.578-68.276 25.578-108.058 0-21.165-17.219-38.383-38.383-38.383s-38.383,17.218-38.383,38.383c0,59.583-48.474,108.057-108.057,108.057h-59.482c-4.143,0-7.5,3.358-7.5,7.5v247.063c0,4.142 3.357,7.5 7.5,7.5h59.482c4.143,0 7.5-3.358 7.5-7.5v-239.798c64.374-3.89 115.557-57.487 115.557-122.822 0-12.894 10.489-23.383 23.383-23.383s23.383,10.489 23.383,23.383c0,42.128-10.673,81.714-30.052,111.465-1.502,2.306-1.621,5.249-0.31,7.668s3.842,3.926 6.594,3.926l107.083-.002c12.894,0 23.383,10.49 23.383,23.383s-10.489,23.383-23.383,23.383h-37.948c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h25.299c12.894,0 23.383,10.489 23.383,23.383s-10.489,23.383-23.383,23.383h-25.299c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h12.649c12.894,0 23.383,10.489 23.383,23.383s-10.489,23.383-23.383,23.383h-12.649c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5c12.894,0 23.383,10.489 23.383,23.383s-10.489,23.383-23.383,23.383h-185.188c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h185.189c21.164,0 38.383-17.218 38.383-38.383 0-10.258-4.045-19.589-10.624-26.482 13.674-5.878 23.273-19.481 23.273-35.284 0-10.258-4.045-19.589-10.624-26.482 13.674-5.878 23.273-19.481 23.273-35.283 0-10.258-4.045-19.589-10.624-26.482 13.675-5.88 23.274-19.483 23.274-35.285zm-299.02,208.68h-44.482v-232.063h44.482v232.063z" />{" "}
                          <path d="m366.865,432.135v-187.062c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v187.062c0,4.142 3.357,7.5 7.5,7.5s7.5-3.358 7.5-7.5z" />{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <p>Social Media</p>
                  </div>
                  <div
                    className={`agency-solutions feature item-center ${
                      activeId === 6 ? "feature-active" : ""
                    }`}
                    onClick={() => moveLeft(6)}
                  >
                    <svg
                      fill="#808080"
                      width="40px"
                      height="40px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#808080"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0" />

                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />

                      <g id="SVGRepo_iconCarrier">
                        <path d="M808.96 983.04c16.962 0 30.72-13.758 30.72-30.72V71.68c0-16.962-13.758-30.72-30.72-30.72H215.04c-16.962 0-30.72 13.758-30.72 30.72v880.64c0 16.962 13.758 30.72 30.72 30.72h593.92zm0 40.96H215.04c-39.583 0-71.68-32.097-71.68-71.68V71.68C143.36 32.097 175.457 0 215.04 0h593.92c39.583 0 71.68 32.097 71.68 71.68v880.64c0 39.583-32.097 71.68-71.68 71.68z" />

                        <path d="M351.348 279.66a20.48 20.48 0 01-7.754 17.414L301.5 330.273l51.958 13.212a20.48 20.48 0 0114.165 12.755l18.569 50.294 28.624-45.329a20.479 20.479 0 0116.505-9.529l53.567-2.124-34.263-41.224a20.482 20.482 0 01-3.963-18.643l14.535-51.605-49.805 19.852a20.477 20.477 0 01-18.956-1.993l-44.58-29.77 3.492 53.491zm-47.068-92.236c-1.106-16.939 17.693-27.793 31.81-18.366l70.139 46.838 78.349-31.229c15.768-6.285 31.898 8.238 27.296 24.577l-22.866 81.183 53.903 64.854c10.849 13.054 2.022 32.882-14.939 33.554l-84.27 3.342-45.032 71.312c-9.063 14.352-30.649 12.082-36.529-3.841l-29.212-79.12-81.745-20.786c-16.452-4.183-20.964-25.416-7.636-35.929l66.225-52.232-5.494-84.159zm339.212 271.753a20.48 20.48 0 01-15.422 11.204l-34.232 4.972 24.767 24.148a20.48 20.48 0 015.888 18.126l-5.847 34.092 30.62-16.095a20.477 20.477 0 0119.057 0l30.62 16.095-5.847-34.092a20.483 20.483 0 015.888-18.126l24.767-24.148-34.232-4.972a20.48 20.48 0 01-15.422-11.204l-15.304-31.012-15.304 31.012zm-3.062-86.354c7.512-15.223 29.219-15.223 36.731 0l28.904 58.573 64.638 9.388c16.798 2.44 23.507 23.082 11.353 34.931l-46.769 45.6 11.042 64.377c2.869 16.729-14.689 29.488-29.714 21.59l-57.82-30.391-57.82 30.391c-15.025 7.897-32.583-4.861-29.714-21.59l11.042-64.377-46.769-45.6c-12.153-11.85-5.444-32.491 11.353-34.931l64.638-9.388 28.904-58.573zM291.84 775.68h440.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H291.84c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm0 81.92h440.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H291.84c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z" />
                      </g>
                    </svg>
                    <p>Agency Solutions</p>
                  </div>
                </div>
                <div
                  className="feature-details-container"
                  style={{
                    transform: `translateX(${position}px)`,
                    transition: "  0.5s ease-in",
                  }}
                >
                  {featureDetailsList.map(
                    (item) => (
                      // item?.id === showId && (
                      <div className="seo-content">
                        <div className="seo-left">
                          <h3> {item.title}</h3>
                          <ul className="seo-list">
                            <li> {item.subtitle1}</li>
                            <li> {item.subtitle2}</li>

                            <li> {item.subtitle3}</li>

                            <li> {item.subtitle4}</li>
                          </ul>
                          <a href="#" className="orange-btn  seo-btn">
                            {" "}
                            Try SEO ToolKit
                          </a>
                        </div>
                        <div className="seo-right">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    )
                    // )
                  )}
                </div>
              </div>
            ) : (
              <MobileWhatInSide
                activeId={activeId}
                moveLeft={moveLeft}
                featureDetailsList={featureDetailsList}
                position={position}
              />
            )}
          </div>

          <div className="review-section-container">
            <div className="review-section">
              <div className="review-headline">
                <p>
                  “Semrush is like a keyword research tool, Google Trends, Moz,
                  Hootsuite and SimilarWeb in one.”
                </p>
              </div>
              <div className="review-user-img">
                <img src={userImg} alt="" />
              </div>
              <span className="review-heading review-text">
                Mario León Rojas
              </span>
              <span className="review-second-des review-text">
                Performance Marketing Specialist,Banco del Sol
              </span>
              <span className="review-source review-text">
                Source: Semrush G2 reviews
              </span>
            </div>
          </div>
          <div className="award-winning-container">
            <h2 className="award-winning-heading">
              Award-winning tools trusted by the world’s leading companies
            </h2>
            <div className="award-footer-container">
              <div className="award-footer-item">
                <div className="second-footer-number footer-heart">10M</div>
                <p className="award-footer-desc">
                  <b> marketing professionals </b>
                  <br />
                  have already used Semrush
                </p>
              </div>
              <div className="award-footer-item">
                <div className="second-footer-number footer-hexagon">21</div>
                <p className="award-footer-desc">
                  <b> international awards</b>
                  <br />
                  as best SEO software suite
                </p>
              </div>
              <div className="award-footer-item">
                <div className="second-footer-number footer-diamond">30%</div>
                <p className="award-footer-desc">
                  <b> Fortune 500</b> companies
                  <br />
                  use Semrush as their go-to
                  <br /> marketing tool
                </p>
              </div>
            </div>
          </div>
          <div className="more-data">
            <div className="more-data-container">
              <div className="more-data-wrapper">
                <div className="left-more-data">
                  <h1 className="more-data-heading">
                    More data. More insights
                  </h1>
                  <p className="more-data-para">
                    With the size of our SEO databases and speed of our backlink
                    crawler, imagine what you can achieve if you have the
                    insights your competitors don’t.
                  </p>
                  <a href="#" className="more-data-btn">
                    Learn More
                  </a>
                </div>
                <div className="right-more-data-wrapper">
                  <div className="right-more-data-cards">
                    <div className="right-more-card">
                      <h1 className="right-more-number">25B</h1>
                      <p className="sub-para-right-more">keywords</p>
                    </div>
                    <div className="right-more-card">
                      <h1 className="right-more-number">43T</h1>
                      <p className="sub-para-right-more">backlinks</p>
                    </div>
                    <div className="right-more-card">
                      <h1 className="right-more-number">808M</h1>
                      <p className="sub-para-right-more">domain profiles</p>
                    </div>
                    <div className="right-more-card">
                      <h1 className="right-more-number">140</h1>
                      <p className="sub-para-right-more">geo databases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ceo">
            <div className="ceo-container">
              <div className="ceo-wrapper">
                <div className="left-ceo">
                  <div className="ceo-image">
                    <img src={ceoImg} alt="ceo-image" />
                  </div>
                  <div className="ceo-name">
                    <div className="ceo-first-name">Oleg Shchegolev</div>
                    <div className="ceo-desig-name">CEO and Founder</div>
                  </div>
                </div>
                <div className="right-ceo">
                  <div className="right-ceo-heading">
                    <h2>
                      Our CEO <br className="wrap-only" /> will eat his hat
                    </h2>
                    <p className="ceo-right-desc">
                      ... if you find another tool that lets you do all these
                      things
                    </p>
                  </div>
                  <ul className="ceo-right-list">
                    <li className="ceo-list">
                      {" "}
                      Access over 25 billion keywords for 130 countries
                    </li>
                    <li className="ceo-list">
                      Run in-depth website audit based on 130+ checks
                    </li>
                    <li className="ceo-list">
                      Get recommendations to improve your content to increase
                      search rankings
                    </li>
                    <li className="ceo-list">
                      Track and analyze competitor websites and marketing
                      strategies
                    </li>
                    <li className="ceo-list">
                      Create and track your PPC campaigns
                    </li>
                    <li className="ceo-list">
                      Draft, schedule and post content on social
                    </li>
                    <li className="ceo-list">
                      Create and schedule white-labeled or branded reports
                    </li>
                  </ul>
                  <a href="#" className="ceo-right-btn">
                    Discover all Semrush features
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="testimonials-container">
              <h2 className="testimonials-heading">
                Here’s why marketers
                <span>Semrush</span>
              </h2>
              <div className="testimonial-slider-index">
                {/* <div className="testi-tab-wrapper"> */}
                <div className="testimonial-tabs">
                  <button
                    className={`test-tab-btn  ${
                      testActiveId === 1 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(1, "makingSuit")}
                  >
                    Making suit
                  </button>
                  <button
                    className={`test-tab-btn seo-btn-test ${
                      testActiveId === 2 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(2, "seo")}
                  >
                    SEO
                  </button>
                  <button
                    className={`test-tab-btn  ${
                      testActiveId === 3 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(3, "contentMarketing")}
                  >
                    Content Marketing
                  </button>
                  <button
                    className={`test-tab-btn  ${
                      testActiveId === 4 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(4, "marketResearch")}
                  >
                    Market Research
                  </button>
                  <button
                    className={`test-tab-btn  ${
                      testActiveId === 5 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(5, "advertising")}
                  >
                    Advertising
                  </button>
                  <button
                    className={`test-tab-btn  ${
                      testActiveId === 6 ? "test-active" : ""
                    }`}
                    onClick={() => testSlide(6, "socialMedia")}
                  >
                    {" "}
                    Social Media
                  </button>
                </div>
                {/* </div> */}
                <div className="testimonial-slider" style={{ backgroundColor }}>
                  <div className="testimonial-slider-control">
                    <button
                      className="prev-btn"
                      onClick={() => {
                        subPrev();
                      }}
                    >
                      <svg
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="25px"
                        height="25px"
                        viewBox="0 0 400.004 400.004"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M382.688,182.686H59.116l77.209-77.214c6.764-6.76,6.764-17.726,0-24.485c-6.764-6.764-17.73-6.764-24.484,0L5.073,187.757
		c-6.764,6.76-6.764,17.727,0,24.485l106.768,106.775c3.381,3.383,7.812,5.072,12.242,5.072c4.43,0,8.861-1.689,12.242-5.072
		c6.764-6.76,6.764-17.726,0-24.484l-77.209-77.218h323.572c9.562,0,17.316-7.753,17.316-17.315
		C400.004,190.438,392.251,182.686,382.688,182.686z"
                          />
                        </g>
                      </svg>
                    </button>
                    <div className="test-slider-number">
                      <span>{nextCount}</span>/<span>{testTotalCount}</span>
                    </div>
                    <button
                      className="test-next-btn"
                      onClick={() => {
                        subNext();
                      }}
                    >
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                          fill="#000000"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="test-slide-wrapper">
                    <div
                      className="testimonial-slides"
                      style={{
                        transform: `translateX(${textPosition}px)`,
                        transition: "  0.5s ease-in",
                      }}
                    >
                      {testimonials.map((item) => (
                        // item.heading === testHeading &&
                        <div className="testimonial-content">
                          <p className="test-desc">{item.para}</p>
                          <div className="test-image">
                            <img src={item.image} alt="tesUser" />
                          </div>
                          <div className="test-name">
                            <span>{item.name}</span>
                          </div>
                          <div className="test-company">
                            <span>{item.company}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="free-trail">
            <div className="free-trail-container">
              <h2 className="wrapper-index-title">
                Get started &nbsp;
                <br className="wrap-sm" />
                with Semrush today
              </h2>
              <p className="free-trail-text">
                Get 7 days of full access to all toolkits.
                <br className="wrap-sm" />
                Cancel anytime.
              </p>
              <a href="#" className="free-trail-btn">
                Start your free trail
              </a>
            </div>
          </div>
          <div className="footer">
            <div className="footer-content-mobile">
              <div className="footer-social-media">
                <a href="#" className="twitter social-border">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 -2 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>twitter [#154]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-60.000000, -7521.000000)"
                        fill="#898d9a"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                            id="twitter-[#154]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#" className="facebk social-border">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="-5 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>facebook [#176]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-385.000000, -7399.000000)"
                        fill="#898d9a"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                            id="facebook-[#176]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#" className="linkedin social-border">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>linkedin [#161]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-180.000000, -7479.000000)"
                        fill="#898d9a"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                            id="linkedin-[#161]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#" className="insta social-border">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      fill="#898d9a"
                    />
                    <path
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                      fill="#898d9a"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      fill="#898d9a"
                    />
                  </svg>
                </a>
                <a href="#" className="pinrest social-border">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.9716 20.5 9.98587 20.3174 9.07345 19.9828C9.64822 18.4359 10.2115 16.8847 10.7517 15.3255C11.326 15.7348 12.0668 16 13 16C14.935 16 16.9749 14.7247 17.4806 12.1961C18.1155 9.02148 15.5728 6 12 6C10.4972 6 9.01887 6.6037 7.91298 7.56243C6.80483 8.52311 6 9.90687 6 11.5C6 12.2746 6.23394 13.1378 6.79149 13.7057C7.17707 14.0919 7.82087 14.0933 8.20711 13.7071C8.59019 13.324 8.59749 12.7074 8.22899 12.3155C7.44315 11.3348 8.47852 9.71907 9.22306 9.07361C9.99585 8.40366 11.0175 8 12 8C14.4272 8 15.8845 9.97852 15.5194 11.8039C15.2165 13.3183 14.065 14 13 14C12.1821 14 11.7416 13.6547 11.4599 13.208C11.6137 12.7237 11.7454 12.2838 11.8387 11.9263C12.0311 11.1886 12.1473 10.3002 11.4839 9.7474C10.9908 9.33644 10.4087 9.42759 10.0528 9.60557C9.39135 9.93629 9 10.7099 9 11.5C9 11.9414 9.06873 12.6253 9.31675 13.3315C8.67824 15.258 7.98579 17.167 7.27924 19.0696C5.00045 17.5449 3.5 14.9477 3.5 12ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z"
                      fill="#898d9a"
                    />
                  </svg>
                </a>
              </div>
              <div className="address-mobile">
                <div className="text-address-mobile">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="-4 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                    fill="#808080"
                    stroke="#808080"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>location</title>{" "}
                      <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                        sketch:type="MSPage"
                      >
                        {" "}
                        <g
                          id="Icon-Set"
                          sketch:type="MSLayerGroup"
                          transform="translate(-104.000000, -411.000000)"
                          fill="#808080"
                        >
                          {" "}
                          <path
                            d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                            id="location"
                            sketch:type="MSShapeGroup"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <address>
                    USA, 800 Boylston Street, Suite 2475, Boston, MA 02199
                  </address>
                </div>
                <a className="contact-btn-mobile">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                      stroke="#898d9a"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#898d9a"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span> Contact us</span>
                </a>
              </div>
              <div className="drop-language-mobile">
                <div className="lang-drop-label">
                  <button
                    className="drop-text"
                    onClick={() => {
                      setLangDropOpen(!langDropOpen);
                    }}
                  >
                    <span>Change Language</span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#898d9a"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {/* <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 15L12 10L7 15"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg> */}
                  </button>
                </div>

                {langDropOpen && (
                  <div className="drop-lang-container">
                    <ul className="drop-lang-list">
                      <li>
                        <button className="language-footer-drop">
                          {" "}
                          English
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Deutsch
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Español
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Français
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Italiano
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          " Nederlands "
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">Polski</button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Português (Brasil)
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Svenska
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          Tiếng Việt
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">Türkçe</button>
                      </li>
                      <li>
                        <button className="language-footer-drop">中文</button>
                      </li>
                      <li>
                        <button className="language-footer-drop">
                          {" "}
                          日本語
                        </button>
                      </li>
                      <li>
                        <button className="language-footer-drop">한국어</button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="footer-container">
              <div className="desktop-footer">
                <div className="contact-us">
                  <div className="left-contact-us">
                    <a href="#" className="contact-btn">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                          stroke="#898d9a"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="#898d9a"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                      Contact us
                    </a>
                    <p className="address">
                      USA, 800 Boylston Street, Suite 2475, Boston, MA 02199
                    </p>
                  </div>
                  <div className="right-contact-us">
                    <a href="#" className="get-start-btn">
                      Get Started with Semrush!
                    </a>{" "}
                    <a href="#" className="see-our-plan">
                      or see our plans & pricing
                    </a>
                  </div>
                </div>
                <div className="last-footer">
                  <div className="footer-list">
                    <ul className="foot-list">
                      <li>
                        <b>SEMRUSH</b>{" "}
                      </li>
                      <li>Features</li>
                      <li>Pricing</li>
                      <li>Success Stories</li>
                      <li>Stats and Facts</li>
                      <li>Insights</li>
                      <li>News</li>
                      <ul className="foot-list help">
                        <li>
                          <b>HELP</b>{" "}
                        </li>
                        <li>Academy</li>
                        <li>Semrush API</li>
                        <li>Success Stories</li>
                      </ul>
                    </ul>

                    <ul className="foot-list">
                      <li>
                        <b>COMMUNITY</b>{" "}
                      </li>
                      <li>Semrush Blog</li>
                      <li>Webinars</li>
                    </ul>

                    <ul className="foot-list">
                      <li>
                        <b>MORE TOOLS</b>{" "}
                      </li>
                      <li>Analytics Reports</li>
                      <li>Projects</li>
                      <li>Agency Partners</li>
                      <li>SAffiliate Program</li>
                      <li>SEOquake</li>
                      <li>News</li>
                      <li>Insights</li>
                      <li>Sensor</li>
                      <li>Prowly</li>
                      <li>Kompyte</li>
                      <li>App Center</li>
                      <li>Enterprise SEO</li>
                    </ul>

                    <ul className="foot-list semrush">
                      <li>
                        <b>SEMRUSH</b>{" "}
                      </li>
                      <li>Features</li>
                      <li>Pricing</li>
                      <li>Success Stories</li>
                      <li>Stats and Facts</li>
                      <li>Insights</li>
                      <li>News</li>
                      <li>Features</li>
                      <li>Pricing</li>
                      <li>Success Stories</li>
                      <li>Stats and Facts</li>
                      <li>Insights</li>
                      <li>News</li>
                      <li>News</li>
                    </ul>
                    <ul className="foot-list">
                      <li>
                        <b>MORE TOOLS</b>{" "}
                      </li>
                      <li>Analytics Reports</li>
                      <li>Projects</li>
                      <li>Agency Partners</li>
                      <li>SAffiliate Program</li>
                      <li>SEOquake</li>

                      <li>Enterprise SEO</li>
                    </ul>

                    <ul className="foot-list">
                      <li>
                        <b>LANGUAGE</b>{" "}
                      </li>
                      <li>
                        <select name=" English" id="" className="lang-select">
                          <option value="">English</option>
                          <option value="">Espain</option>
                          <option value="">Bengali</option>
                          <option value="">Bhojpuri</option>
                          <option value="">Turkish</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right">
              <div className="copyright-container">
                <img src={logo} alt="" className="footer-logo" />

                <p className="copyright-text">
                  © 2008 - 2024 Semrush. All rights reserved.
                </p>
                <p className="cookie-setting">Cookie settings</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <footer> */}

      {/* </footer> */}
    </div>
  );
}

export default Body;
