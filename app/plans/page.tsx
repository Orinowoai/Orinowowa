'use client';
export default function PlansPage() {
 return (
 <main className="mx-auto max-w-6xl px-4 py-10">
	 <section className="glass gold-border rounded-2xl p-6 md:p-10">
		 <header className="mb-6 md:mb-8 flex items-center justify-between">
			 <h1 className="text-2xl md:text-3xl font-semibold text-[color:theme(colors.orinowo.champagne)]">
				 Choose your plan
			 </h1>
			 <p className="text-xs md:text-sm text-white/70">Free trial • Cancel anytime</p>
		 </header>
		 <div
			 className="min-h-[520px]"
			 dangerouslySetInnerHTML={{
				 __html: `
					 <script async src=\"https://js.stripe.com/v3/pricing-table.js\"></script>
					 <stripe-pricing-table
						 pricing-table-id=\"prctbl_1SAufJCbycES077rJZHqb8fo\"
						 publishable-key=\"pk_live_51S3IUACbycES077rbFXZzxhkBAtSKPo9kzPC2u19CBubid4CwwnZmAk5uqWOmrLufVkK93cilA65hR9CF4UbkoOx00knwGHyDL\">
					 </stripe-pricing-table>
				 `,
			 }}
		 />
	 </section>
 </main>
 );
}
