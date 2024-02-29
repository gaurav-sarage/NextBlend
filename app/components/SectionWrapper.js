const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-8 ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper