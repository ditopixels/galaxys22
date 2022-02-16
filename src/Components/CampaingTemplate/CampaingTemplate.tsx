import React, { FC, useEffect } from 'react'
import { CampaingTemplateProps } from '../../types/campaings'

const CampaingTemplate:FC<CampaingTemplateProps> = ({ id,title,children }) => {

    useEffect(()=>{
        document.title = title
    })

    return (
        <div id={id}>
            {children}
        </div>
    )
}

export default CampaingTemplate