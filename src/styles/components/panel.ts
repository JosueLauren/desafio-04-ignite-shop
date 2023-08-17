import { styled } from "..";


export const PanelBackground = styled('div', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.7)',
    zIndex: '1',
    display: 'none',

    '&.show': {
        display: 'block'
    }
})

export const PanelContainer = styled('section', {
    position: 'absolute',
    zIndex: '1',
    top: '0',
    right: '0',
    height: '100vh',
    width: '100%',
    maxWidth: '0',
    background: '$gray800',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto',
    transition: 'all linear 1s',


    '&.show': {
        maxWidth: '480px',
    }

})

export const PanelHeader = styled('div', {
    
    button: {
        background: 'transparent',
        border: '0',
        position: 'absolute',
        right: '48px',
        cursor: 'pointer',
        height: '20px',
        width: '24px',
        lineHeight: '0',
    }
})


export const PanelBody = styled('div', {
    justifySelf: 'flex-start',
    
    p: {
        marginBottom: '30px',
        fontSize: '20px',
        fontWeight: '700',
        color: '$gray100',
    }

})

export const PanelFooter = styled('footer', {
    
    
    p : {

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        label: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '160%',
            color: '$gray100'
        },

        span: {
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '160%',
            color: '$gray300'
        }
    },

    div : {

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        label: {
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '160%',
            color: '$gray100'
        },

        span: {
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '160%',
            color: '$gray100'
        }
    },

    button: {
        width: '100%',
        borderRadius: '8px',
        padding: '20px 32px',
        marginTop: '55px',
        background: '$green500',
        color: '$white',
        cursor: 'pointer',
        border: '0',
        transition: 'backgorund 0.2s ease',
        
        '&:hover': {
            background: '$green300'
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    }
})