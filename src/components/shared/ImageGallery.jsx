import React, { useState } from "react";

const
    ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-6xl p-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(25%-12px)] flex-grow-0 flex-shrink-0"
                        style={{ maxWidth: "300px", minWidth: "250px" }}
                    >
                        <img
                            src={img}
                            alt=""
                            className="cursor-pointer rounded shadow w-full object-cover hover:opacity-90 transition-opacity max-h-48 mx-auto "
                            onClick={() => setSelectedImage(img)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 backdrop-blur-sm flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt=""
                        className="max-h-[80vh] max-w-[80vw] rounded shadow-lg transition-transform transition-opacity duration-300 scale-90 opacity-0 animate-fade-in"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
