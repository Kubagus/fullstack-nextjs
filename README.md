This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clone Repository
   
    ```
    git clone https://github.com/Kubagus/fullstack-nextjs
    ```

    ```
    cd FullStack-Next
    ```

2. Install Dependencies

    ```
    npm install
    ```

3. Setup Environment Variable

    Buat file `.env` di root project:

    ```
    DATABASE_URL="mysql://root:@localhost3306/db_nextjs_fullstack"
    ```

    Sesuaikan dengan database yang kamu gunakan. 
    

4. Jalankan Migration Database
    
    ```
    npx prisma migrate dev
    ```

5. Jalankan Development Server
   
    ```
    npm run dev
    ```