/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function AboutMe () {
    const aboutMeDivStyle = css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      "@media screen and (min-width: 768px)": {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginLeft: '0%',
      marginTop: '-10%',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0px 4px 10px rgba(0,0,0,1)',
      }
    });

    const profilePicStyle = css({
      width: '50vh',
      margin: 'auto',
      "@media screen and (min-width: 768px)": {
        width: '400px',
        height: '400px',
        borderRadius: '10%',
        objectFit: 'cover',
        marginLeft: '30px',
        marginTop: '5px',
      }
    });

    const containerStyle = css({
      alignItems: 'center',
      textAlign: 'center',
      width: '100%',
      "@media screen and (min-width: 768px)": {
        display: "flex",
        flexDirection: "column",
        width: "75%",
        textAlign: "left",
      
      }
    });

    const aboutH1Style = css({
      width: '100vh',  
      flexWrap: 'nowrap',
      margin: '0',
      "@media screen and (min-width: 768px)": {
        fontSize: '60',
        fontWeight: 'bold',
        marginBottom: '8px',
        marginLeft: '60%'
      }
    });
    
    return (
      <div css={aboutMeDivStyle}>
        <img src="../GerdesJason.jpg" css={profilePicStyle}></img>
        <div css={containerStyle}>
          <h1 css={aboutH1Style}>:::About Me:::</h1>
          <p style={{fontSize: 50, textAlign: 'left', width: '75%'}}>Fuzzy Wuzzy was a bear but Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy was he?</p> 
        </div>
      </div>
    );
}