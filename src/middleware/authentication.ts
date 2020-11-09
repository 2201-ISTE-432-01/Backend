export function ensureAuthenticated (req: any, res: any, next: any) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/auth/spotify");
}
