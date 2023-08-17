import { styled } from "@stitches/react";


export const SuccessContainer = styled('main', { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '656',

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        margin: '32px 0 0 0'
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        fontSize: 'lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const AllImagesContainer = styled('div', {
    display: 'flex',

    div: {
        '& + div': {
            marginLeft: '-45px'
        }
    }
})

export const ImageContainer = styled('div', {
    width: 130,
    height: 130,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    padding: '0.25rem',
    marginTop: '4rem',
    boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})