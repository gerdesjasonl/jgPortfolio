
export default function AboutMe () {
    const aboutMeDivStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    };
    const profilePicStyle = {
      width: '50vh',
      margin: 'auto',
    };
    const aboutH1Style = {
      width: '70vh',  
      flexWrap: 'nowrap',
      margin: 'auto',
    };
    
    return (
      <div style={aboutMeDivStyle}>
        <img src="../GerdesJason.jpg" style={profilePicStyle}></img>
        <h1 style={aboutH1Style}>:::About Me:::</h1>
        <p style={{fontSize: 50}}>Fuzzy Wuzzy was a bear but Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy was he?</p> 
      </div>
    );
}