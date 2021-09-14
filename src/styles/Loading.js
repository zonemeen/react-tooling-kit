import styled from 'styled-components'

export const LoadingStyle = styled.span`
    .container {
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 100%;
        justify-content: center;
        width: 100%;
    }
    .loader {
        background-image: url('../assets/spinner-large.png');
        background-repeat: no-repeat;
        display: inline-block;
        height: 96px;
        width: 96px;
        animation: rotating 2s linear infinite;
    }
    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`
