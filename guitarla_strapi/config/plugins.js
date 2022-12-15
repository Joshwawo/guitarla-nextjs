module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },

    actionOptions: {
      upload: {},
      delete: {},
      folder: "strapi",
      asset_public_id: "strapi",
      asset_folder: "strapi",
      
    },
    //que se guarde en alguna carpeta
  },
  // ...
});
