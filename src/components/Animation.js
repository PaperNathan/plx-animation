import React, { Component } from 'react';

// Packages
import Plx from "react-plx";
import styled from 'styled-components';

// Container
const Wrapper = styled.div`
  width: 768px;
  height: 400vh;

  position: relative;

  background: white;
`;


// Element 1
const parallax00 = [
  {
    start: 0,
    end: 150,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      },
      {
        startValue: 0,
        endValue: 150,
        property: "translateY"
      }
    ]
  }
];

const ElementOneStyles = {
  width: 300,
  height: 200,
  position: "absolute",
  zIndex: 10,
  left: "calc(50% - 150px)",

  background: "salmon",
  margin: "20px auto",
};

// Element 2
const parallax01 = [
  {
    start: 0,
    end: 150,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      },
      {
        startValue: 0,
        endValue: 150,
        property: "translateY"
      }
    ]
  },
  {
    start: 150,
    end: 500,
    properties: [
      {
        startValue: 150,
        endValue: 500,
        property: "translateY"
      }
    ]
  }
];

const ElementTwoStyles = {
  width: 300,
  height: 200,
  position: "absolute",
  zIndex: 5,
  left: "calc(50% - 150px)",

  background: "#dad",
  margin: "20px auto",
};

// Element 3
const parallax02 = [
  {
    start: 0,
    end: 150,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      },
      {
        startValue: 0,
        endValue: 150,
        property: "translateY"
      }
    ]
  },
  {
    start: 150,
    end: 800,
    properties: [
      {
        startValue: 150,
        endValue: 800,
        property: "translateY"
      }
    ]
  },
  {
    start: 700,
    end: 800,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: "rotate"
      }
    ]
  }
];

const ElementThreeStyles = {
  width: 50,
  height: 100,
  position: "absolute",
  zIndex: 6,
  left: "calc(50% - 25px)",
  translateY: "100px",
  background: "black",
  margin: "120px auto 20px",
};

// Element 4
const parallax03 = [
  {
    start: 0,
    end: 150,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      },
      {
        startValue: 0,
        endValue: 150,
        property: "translateY"
      }
    ]
  },
  {
    start: 150,
    end: 800,
    properties: [
      {
        startValue: 150,
        endValue: 800,
        property: "translateY"
      }
    ]
  },
  {
    start: 800,
    end: 900,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: "height"
      }
    ]
  }
];

const ElementFourStyles = {
  width: 50,
  height: 0,
  position: "absolute",
  zIndex: 6,
  left: "calc(50% - 25px)",
  background: "papayawhip",
  margin: "195px auto 20px",
};

// Element 5
const parallax04 = [
  {
    start: 0,
    end: 150,
    properties: [
      {
        startValue: 0,
        endValue: 180,
        property: 'rotate'
      },
      {
        startValue: 0,
        endValue: 150,
        property: "translateY"
      }
    ]
  },
  {
    start: 150,
    end: 800,
    properties: [
      {
        startValue: 150,
        endValue: 1000,
        property: "translateY"
      }
    ]
  },
  {
    start: 1000,
    end: 1100,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: "height"
      }
    ]
  }
];

const ElementFiveStyles = {
  width: 100,
  height: 0,
  position: "absolute",
  zIndex: 6,
  left: "calc(50% - 50px)",
  background: "red",
  margin: "195px auto 20px",
};

class Animation extends Component {
    render() {
      return (
        <Wrapper>
            <Plx parallaxData={parallax00} style={ElementOneStyles}></Plx>
            <Plx parallaxData={parallax01} style={ElementTwoStyles}></Plx>
            <Plx parallaxData={parallax02} style={ElementThreeStyles}></Plx>
            <Plx parallaxData={parallax03} style={ElementFourStyles}></Plx>
            <Plx parallaxData={parallax04} style={ElementFiveStyles}></Plx>
        </Wrapper>
      );
    }
  }

{/* <Wrapper>
    <Plx parallaxData={parallax00} style={ElementOneStyles}></Plx>
    <Plx parallaxData={parallax01} style={ElementTwoStyles}></Plx>
    <Plx parallaxData={parallax02} style={ElementThreeStyles}></Plx>
    <Plx parallaxData={parallax03} style={ElementFourStyles}></Plx>
    <Plx parallaxData={parallax04} style={ElementFiveStyles}></Plx>
</Wrapper> */}

export default Animation;
