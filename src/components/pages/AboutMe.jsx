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
      width: '80%',
      marginLeft: '10%',
      marginRight: '-10%',
      marginTop: '0%',
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

    const aboutPStyle = css({
      fontSize: '50',
      textAlign: 'center',
      width: '100%',
      "@media screen and (min-width: 768px)": {
        width: '75%',
        textAlign: 'left',
      }
    })
    
    return (
      <div css={aboutMeDivStyle}>
        <img src="../GerdesJason.jpg" css={profilePicStyle}></img>
        <div css={containerStyle}>
          <h1 css={aboutH1Style}>:::About Me:::</h1>
          <p css={aboutPStyle} style={{fontWeight: 'bolder'}}>I am an experienced educator, researcher, and software developer with a diverse professional background spanning academia, retail and restaurant management, and digital curriculum design.</p>

          <p css={aboutPStyle}>I have lectured university courses on medical anthropology and the political history of diversity in the United States, bringing complex social and historical concepts to life for students. My expertise extends to advanced social science research, pedagogy, and curriculum design, with a strong focus on archive management and data visualization. Beyond academia, I have honed leadership and operational skills through years of managing retail stores and restaurants, gaining invaluable experience in team management, customer engagement, and business strategy. My transition into software development stems from a passion for creating innovative, data-driven educational tools. By leveraging my background in research and pedagogy, I aim to design digital curricula that enhance learning experiences through interactive and accessible technology.</p> 
          
          <p css={aboutPStyle} style={{fontWeight: 'bolder'}}>With a unique blend of analytical rigor, technical proficiency, and real-world management experience, I am committed to shaping the future of education through technology.</p> 
        </div>
      </div>
    );
}