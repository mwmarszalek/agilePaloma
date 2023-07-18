

const Links: React.FC = () => {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
      };

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Anton',
    fontSize: '6.9rem',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.4rem',
    textTransform: 'uppercase',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    width: '1em',
    marginRight: '.25em'
  };

  return (
    <div style={containerStyle}>
      <div style={linkStyle}>HEAR</div>
      <div style={linkStyle}>LATEST</div>
      <div style={linkStyle}>TOUR</div>
      <div style={linkStyle}>SEE</div>
      <div style={linkStyle}>SHOP</div>
      <div style={linkStyle}>WATCH</div>
      <div style={linkStyle}>PERSONAL</div>
      <div style={linkStyle}>AID</div>
    </div>
  );
};

export default Links;
