import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] space-y-6 px-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-center space-y-4"
      >
        <div className="space-y-2">
          <motion.h1
            className="text-7xl font-bold text-primary"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-[500px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Sorry, the page you&apos;re looking for doesn&apos;t exist. But don&apos;t worry, you can always go back to the home page or check out my projects.
          </motion.p>
        </div>

        <motion.div
          className="flex gap-4 justify-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            View Projects
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>🚀 Full Stack Developer | MERN | Next.js</p>
      </motion.div>
    </div>
  );
}
