const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-9 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper