ALTER TABLE `posts`
    ADD COLUMN `summary` TINYTEXT NULL AFTER `slug`,
    ADD COLUMN `reviewed` BOOLEAN NULL DEFAULT false AFTER `published`;
