import React from 'react'

const FacebookLogo = ({ style }) => {
    return (
        <svg style={style || { width: "24px" }} viewBox="0 0 32 32">
            <path d="M31.997 16c0-8.837-7.163-16-15.999-16s-15.999 7.163-15.999 16c0 7.984 5.851 14.603 13.499 15.803v-11.179h-4.061v-4.625h4.061v-3.524c0-4.011 2.389-6.225 6.043-6.225 1.751 0 3.581 0.312 3.581 0.312v3.937h-2.016c-1.987 0-2.607 1.233-2.607 2.499v3.003h4.437l-0.709 4.625h-3.728v11.179c7.648-1.2 13.499-7.819 13.499-15.804z"></path>
        </svg>
    )
}

export default FacebookLogo