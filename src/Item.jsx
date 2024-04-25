function Item() {
    const [title, description] = useState(0)
    return (
        <>
            <div class="item-container">
                <div class="item-title">
                    <h2>{{title}}</h2>
                </div>
                <div class="item-description">
                    <p>{{description}}</p>
                </div>
            </div>
        </>
        
    )
}

export default Item