async function main(): Promise<void> {
    console.info()
    console.info("Job done, have a great day!")
}

main()
    .catch(console.error)
    .then(() => process.exit(0))
