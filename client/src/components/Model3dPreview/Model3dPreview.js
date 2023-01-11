import "./Model3dPreview.scss";

const Model3dPreview = ({modelUrl}) => {
    return (
        <div className="model-preview">
            <iframe title="Preview"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true"
                    execution-while-not-rendered="true"
                    web-share="true"
                    src={`${modelUrl}/embed`}>
                </iframe>
        </div>
    );
};

export default Model3dPreview;