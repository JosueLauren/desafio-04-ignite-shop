import { styled } from "..";

export const HeaderComponent = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    '&.center': {
        justifyContent: 'center',
    },

    button: {
        padding: '12px',
        borderRadius: '6px',
        cursor: 'pointer',
        background: '$gray800',
        border: '0',
        lineHeight: '0',
        position: 'relative',

        '&.hide': {
            display: 'none'
        },

        span: {
            position: 'absolute',
            color: '$white',
            width: '24px',
            height: '24px',
            borderRadius: '100%',
            background: '$green500',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            right: '-5px',
            top: '-5px',
        }        
    }


})