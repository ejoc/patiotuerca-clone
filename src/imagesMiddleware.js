import cloudinary from 'cloudinary';
import google from 'googleapis';

const urlshortener = google.urlshortener({
  version: 'v1',
  auth: 'AIzaSyDMcfko587AwxG7CooMTgVLKnWtXpXZgLM',
});

function generateShortUrl(req, res, next) {
  if (!req.file) {
    return next();
  }

  if (req.file.cloudStoragePublicUrl) {
    urlshortener.url.insert(
      {
        resource: {
          longUrl: req.file.cloudStoragePublicUrl,
        },
      },
      (err, result) => {
        if (err) {
          next(err);
        }
        req.body.urlCorta = result.id;
        next();
      },
    );
  }
}

function sendUploadToCloudinary(req, res, next) {
  if (!req.file) {
    return next();
  }

  const stream = cloudinary.v2.uploader.upload_stream(
    { resource_type: 'auto' },
    (error, result) => {
      if (error) {
        next(error);
      }
      req.file.cloudStoragePublicUrl = result.url;
      next();
    },
  );

  stream.end(req.file.buffer);
}

const Multer = require('multer');

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
});

export default {
  sendUploadToCloudinary,
  multer,
  generateShortUrl,
};
