
rt default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
