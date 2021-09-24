const uploadFile = async (file) => {
    const cloudName = "dpzg6mrfx";
    const cloudinaryPreset = "internship-logbook";
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", cloudinaryPreset);

    const uploaded = await fetch(url, {
        method: "POST",
        body: formData
    }).then(response => response.ok ? response.json() : console.log(response))

    return uploaded;
}

export default uploadFile;