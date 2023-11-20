-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecharLeilao" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "_LanceToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LanceToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Lance" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LanceToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LanceToLeilao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LanceToLeilao_A_fkey" FOREIGN KEY ("A") REFERENCES "Lance" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LanceToLeilao_B_fkey" FOREIGN KEY ("B") REFERENCES "Leilao" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LanceToUsuario_AB_unique" ON "_LanceToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_LanceToUsuario_B_index" ON "_LanceToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LanceToLeilao_AB_unique" ON "_LanceToLeilao"("A", "B");

-- CreateIndex
CREATE INDEX "_LanceToLeilao_B_index" ON "_LanceToLeilao"("B");
