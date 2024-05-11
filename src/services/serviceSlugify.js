import slugify from 'slugify';

export const getSlug = obj => {
  return slugify(`${obj.title || obj.name} ${obj.id}`, {
    lower: true,
    strict: true,
  });
};

export const parseSlug = slug => {
  return slug.match(/[a-zA-Z0-9]+$/)[0];
};
