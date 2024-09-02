ALTER TABLE `users`
    CHANGE COLUMN `hashedPassword` `password` VARCHAR(191) NOT NULL AFTER `email`;
