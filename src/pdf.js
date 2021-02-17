import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const MyApp = () => {
    return (
        <PDFViewer
            document={{
                url: 'Resume_Branyer_Vergara.pdf',
            }}
        />
    )
}

export default MyApp