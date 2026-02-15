export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Dedicated to serving the modest fashion community
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Welcome to Modest Elegance, your trusted source for premium quality niqabs and modest wear. 
            We began our journey with a simple mission: to provide Muslim women with beautiful, 
            comfortable, and high-quality niqabs that honor both tradition and contemporary style.
          </p>
          
          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Quality First</h3>
              <p className="text-gray-700">
                We source only the finest fabrics and materials to ensure every piece meets 
                our rigorous standards for comfort, durability, and beauty.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Respectful Service</h3>
              <p className="text-gray-700">
                We understand the importance of modesty in Islam and treat every customer 
                with the respect and dignity they deserve.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Authentic Designs</h3>
              <p className="text-gray-700">
                Our designs honor traditional Islamic dress while incorporating modern 
                elements for comfort and practicality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-3">Community Focus</h3>
              <p className="text-gray-700">
                We're committed to serving and supporting the Muslim community through 
                ethical business practices and charitable initiatives.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-6">Our Products</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Each niqab in our collection is carefully selected and tested to ensure it meets 
            our high standards. We offer a variety of styles, from classic everyday wear to 
            luxurious pieces for special occasions. Whether you prefer lightweight chiffon, 
            comfortable cotton, or elegant silk, we have something for every preference and budget.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            All our products are designed with the modern Muslim woman in mind - combining 
            full coverage with breathability, style with modesty, and tradition with contemporary 
            elegance.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-6 mt-12">Contact Us</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4">
              We'd love to hear from you! Whether you have questions about our products, 
              need sizing advice, or just want to say hello, please don't hesitate to reach out.
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> info@modestelegance.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
