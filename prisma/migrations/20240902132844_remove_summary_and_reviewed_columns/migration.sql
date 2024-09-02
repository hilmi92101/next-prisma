/*
  Warnings:

  - You are about to drop the column `reviewed` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `reviewed`,
    DROP COLUMN `summary`;
