import { styled } from "..";


export const PanelItemContainer = styled('div', {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '24px',

    'div.imageContainer': {
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: '8px'
    },

    div: {
        p: {
            margin: '0',
            lineHeight: '160%',
            color: '$gray300',
            fontSize: '18px',
            fontWeight: '400'
        },

        span: {
            display: 'block',
            marginBottom: '8px',
            fontSize: '18px',
            fontWeight: '700',
            color: 'gray100',
            lineHeight: '160%',
            
        },

        button: {
            border: '0',
            background: 'transparent',
            color: '$green500',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'color .2s ease',

            '&:hover': {
                color: '$green300'
            }

        },
    }

})